import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestionComponent } from './requestion.component';

describe('RequestionComponent', () => {
  it('should create', () => {
    const mockroute = jasmine.createSpy() as any;
    const mockquestionService = jasmine.createSpy() as any;
    const mockservice = jasmine.createSpy() as any;
    const mockmodalService = jasmine.createSpy() as any;
    const mockmodalServiceEdit = jasmine.createSpy() as any;
    const document = jasmine.createSpy() as any;

    const component = new RequestionComponent(
      mockroute,
      mockquestionService,
      mockservice,
      mockmodalService,
      mockmodalServiceEdit,
      document
    );
    expect(component).toBeTruthy();
  });
});
