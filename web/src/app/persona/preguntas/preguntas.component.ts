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
  Math = Math;
  userLogged = this.authService.getUserLogged();
  uid: any;
  questions: QuestionI[] | undefined;
  user: any = '';
  totalPages: number = 0;
  page: number = 0;
  pageSize = 10;
  disabled: boolean = false;

  constructor(
    private service: QuestionService,
    public authService: ServiceService
  ) {}

  ngOnInit(): void {
    this.getQuestions();
    this.traerdatos();
  }

  getQuestions(): void {
    this.userLogged.subscribe((value) => {
      this.uid = value?.uid;
    });

    this.questions = [];
    this.service.getAllQuestions().subscribe((data) => {
      this.questions = data;
      this.totalPages = Math.ceil(data.length / 10);
    });
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page -= 1;
    }
  }

  nextPage(): void {
    this.page += 1;
  }

  getPage(page: number): void {
    this.page = page;
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
