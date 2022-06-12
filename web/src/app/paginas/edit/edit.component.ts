import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { QuestionI } from 'src/app/models/question-i';
import { QuestionService } from 'src/app/Service/question.service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService],
})
export class EditComponent implements OnInit {
  // originalQuestion: es la pregunta original sin modificaciones
  @Input() originalQuestion?: QuestionI;
  // question es la pregunta que vamos a editar o crear
  question: QuestionI = {
    id: '',
    userId: '',
    question: '',
    type: '',
    category: '',
    answers: [],
    start: '2',
  };

  constructor(
    private modalService: NgbModal,
    public authService: ServiceService,
    private services: QuestionService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe((user) => {
      this.question.email = user?.email || undefined;
    });

    if (this.originalQuestion == null) return;
    // saco una copia de la pregunta original,
    // porque si modifico la original se modifica tambien en el listado de preguntas
    this.question = { ...this.originalQuestion };
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  editQuestion(question: QuestionI): void {
    this.services.saveQuestion(question).subscribe((v) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Se ha actualizado la pregunta',
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });

    this.modalService.dismissAll();
  }
}
