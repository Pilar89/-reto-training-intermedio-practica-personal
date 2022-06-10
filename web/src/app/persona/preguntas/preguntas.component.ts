import { Component, Input, OnInit } from '@angular/core';
import { map } from '@firebase/util';
import { QuestionI } from 'src/app/models/question-i';
import { QuestionService } from 'src/app/Service/question.service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  uid: any;
  totalQuestions: number = 0;
  questions: QuestionI[] | undefined;
  user: any = '';
  totalPages: number = 0;
  page: number = 0;
  actualPage = 1;
  pages: Array<number> | undefined;
  disabled: boolean = false;
  initIndex: number = 0;
  finalIndex: number = 10;

  constructor(
    private service: QuestionService,
    public authService: ServiceService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
    this.traerdatos();
    //this.traerPresguntas();
  }

  getQuestions(): void {
    this.userLogged.subscribe((value) => {
      this.uid = value?.uid;
    });

    this.questions = [];
    this.service.getAllQuestions().subscribe((data) => {
      this.totalQuestions = data.length;
      this.questions = data;
      this.totalPages = Math.ceil(data.length / 10);
      this.pages = Array.from(Array(Math.ceil(data.length / 10)).keys()).map(
        (i) => i + 1
      );
    });
    // this.service.getPage(this.page).subscribe((data) => {
    //   this.questions = data;
    // });
    // this.service.getPage(this.page).subscribe((data) => {
    //   this.questions = data;
    // });
    // this.service
    //   .getTotalPages()
    //   .subscribe((data) => (this.pages = new Array(data)));
    // this.service
    //   .getCountQuestions()
    //   .subscribe((data) => (this.totalQuestions = data));
  }

  isLast(): boolean {
    let totalPeges: any = this.pages?.length;
    return this.page == totalPeges - 1;
  }

  isFirst(): boolean {
    return this.page == 0;
  }

  previousPage(): void {
    !this.isFirst()
      ? (this.page--,
        this.getQuestions(),
        (this.initIndex -= 10),
        (this.finalIndex -= 10))
      : false;
    if (this.initIndex <= 0) {
      this.initIndex = 0;
      this.finalIndex = 10;
    }
  }

  nextPage(): void {
    !this.isLast()
      ? (this.page++,
        this.getQuestions(),
        (this.initIndex += 10),
        (this.finalIndex += 10))
      : false;
  }

  getPage(page: number): void {
    this.initIndex = page * 10;
    this.finalIndex = (page + 1) * 10;
    console.log(this.initIndex);
    console.log(this.finalIndex);

    // this.page = page;
    // this.getQuestions();
  }

  traerdatos() {
    this.userLogged.subscribe((value) => {
      if (value?.email == undefined) {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    });
  }
}
