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
  selector: 'app-edit-aswer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.css'],
  providers: [MessageService],
})
export class EditAswerComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    rating: ['', []],
  });

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

  @Input() answer: AnswerI = {
    id: '',
    userId: '',
    questionId: '',
    answer: '',
    position: 0,
    numberOfVotes: 0,
  };

  ngOnInit(): void {}
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  openVerticallyCenteredEdit(content: any) {
    this.modalServiceEdit.open(content, { centered: true });
  }

  saveAnswer(): void {
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
}
