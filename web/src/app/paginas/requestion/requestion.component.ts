import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionI } from 'src/app/models/question-i';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerI } from 'src/app/models/answer-i';
import { QuestionService } from 'src/app/Service/question.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-requestion',
  templateUrl: './requestion.component.html',
  styleUrls: ['./requestion.component.css'],
  providers: [MessageService],
})
export class RequestionComponent implements OnInit {
  question: QuestionI | undefined;
  answers: AnswerI[] | undefined;
  answersNew: AnswerI[] = [];
  currentAnswer: number = 0;
  userId?: string;
  localitems!: string | null;
  showButto = false;
  private scrolHeigt = 100;

  questions: QuestionI[] | undefined;

  page: number = 0;
  calificacion: number = 0;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private service: QuestionService,
    private modalService: NgbModal,
    private messageService: MessageService,
    private modalServiceEdit: NgbModal,
    @Inject(DOCUMENT) private document: Document
  ) {}

  id: string | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getQuestions(`${id}`);
    this.getUserId();
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  openVerticallyCenteredEdit(content: any) {
    this.modalServiceEdit.open(content, { centered: true });
  }

  getQuestions(id: string): void {
    this.questionService.getQuestion(id).subscribe((data) => {
      this.question = data;
      this.answers = data.answers;
    });
  }

  AddAnwsers(index: number) {
    let last = this.currentAnswer + index;
    for (let i = this.currentAnswer; i < last; i++) {}
    this.currentAnswer += 10;
  }

  getUserId(): void {
    this.localitems = localStorage.getItem('user');
    if (typeof this.localitems === 'string') {
      const parse = JSON.parse(this.localitems).uid; // ok
      this.userId = parse;
    }
  }

  onScroll() {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.pageXOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButto = (yOffset || scrollTop) > this.scrolHeigt;
  }
  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
  onScrollDown(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.service.getAnswer(id).subscribe((data) => {
      this.answers = data.answers;
    });
  }

  agregarCalificacion(answer: AnswerI, calificacion: number): void {
    console.log('answer' + answer.answer);
    //answer.answer = 'hello';

    console.log('calificacion ' + calificacion);
    answer.position = calificacion + answer.position;
    console.log('numerodevotosantes' + answer.numberOfVotes);
    answer.numberOfVotes = answer.numberOfVotes + 1;
    console.log('numerodevostos despues' + answer.numberOfVotes);
    this.service.saveAnswer(answer).subscribe({
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
