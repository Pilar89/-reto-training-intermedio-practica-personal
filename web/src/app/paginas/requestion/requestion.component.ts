import { AnswerI } from './../../models/answer-i';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionI } from 'src/app/models/question-i';
import { QuestionService } from 'src/app/Service/question.service';

@Component({
  selector: 'app-requestion',
  templateUrl: './requestion.component.html',
  styleUrls: ['./requestion.component.css'],
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

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private service: QuestionService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  id: string | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getQuestions(`${id}`);
    this.get2();
    this.getUserId();
  }

  get2() {
    let id = this.route.snapshot.paramMap.get('id');

    this.service.getAnswer(id).subscribe((data) => {
      this.answers = data.answers;
    });
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
}
