import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  it('should create', () => {
    const mockModalService = jasmine.createSpy() as any;
    const mockAuthService = { userData: {} } as any;
    const mockServices = jasmine.createSpy() as any;
    const mockToastr = jasmine.createSpy() as any;
    const mockMessageService = jasmine.createSpy() as any;

    const component = new QuestionComponent(
      mockModalService,
      mockAuthService,
      mockServices,
      mockToastr,
      mockMessageService
    );
    expect(component).toBeTruthy();
  });
});
