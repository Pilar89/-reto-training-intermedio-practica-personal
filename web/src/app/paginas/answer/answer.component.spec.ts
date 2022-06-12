import { FormGroup } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerComponent } from './answer.component';

describe('AnswerComponent', () => {
  it('should create', () => {
    const mockModalService = jasmine.createSpy() as any;
    const mockModalServiceEdit = jasmine.createSpy() as any;
    const mockQuestionService = jasmine.createSpy() as any;
    const mockFormBuilder = { group: () => null } as any;
    const mockMessageService = jasmine.createSpy() as any;
    const mockUthService = jasmine.createSpy() as any;

    const component = new AnswerComponent(
      mockModalService,
      mockModalServiceEdit,
      mockQuestionService,
      mockFormBuilder,
      mockMessageService,
      mockUthService
    );
    expect(component).toBeTruthy();
  });
});
