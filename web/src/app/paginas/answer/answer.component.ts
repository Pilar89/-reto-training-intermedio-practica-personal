import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerI } from 'src/app/models/answer-i';
import { QuestionService } from 'src/app/Service/question.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  providers: [MessageService],
})
export class AnswerComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    rating: ['', []],
  });

  @Input() item: any;
  constructor(
    private modalService: NgbModal,
    private modalServiceEdit: NgbModal,
    private services: QuestionService,
    private toastr: ToastrService,
    private route: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    public authService: ServiceService
  ) {}

  answer: AnswerI = {
    userId: '',
    questionId: '',
    answer: '',
    position: 0,
  };

  localitems!: string | null;

  ngOnInit(): void {
    this.getUserId();
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  openVerticallyCenteredEdit(content: any) {
    this.modalServiceEdit.open(content, { centered: true });
  }

  saveAnswer(): void {
    this.answer.userId = this.item.userId;
    this.answer.questionId = this.item.id;
    if (this.localitems != null) {
      this.answer.userId = this.localitems;
    }

    this.services.saveAnswer(this.answer).subscribe({
      next: (v) => {
        if (v) {
          this.modalService.dismissAll();
          this.messageService.add({
            severity: 'success',
            summary: 'Se ha agregado la respuesta',
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      },
      error: (e) =>
        this.messageService.add({
          severity: 'error',
          summary: 'Rectifique los datos',
          detail: '(Campos Vacios)-Intente de Nuevo',
        }),
      complete: () => console.info('complete'),
    });
  }

  getUserId(): void {
    this.localitems = localStorage.getItem('user');
    if (typeof this.localitems === 'string') {
      const parse = JSON.parse(this.localitems).uid; // ok
      this.localitems = parse;
    }

    //console.log(JSON.parse(localStorage.getItem('user')).uid);
  }
}
