import { LoginComponent } from './login.component';

describe('QuestionComponent', () => {
  it('LoginComponent', () => {
    const mockformBuilder = { group: () => null } as any;
    const mockmessageService = jasmine.createSpy() as any;
    const mockauthService = jasmine.createSpy() as any;
    const mockroute = jasmine.createSpy() as any;

    const component = new LoginComponent(
      mockformBuilder,
      mockmessageService,
      mockauthService,
      mockroute
    );
    expect(component).toBeTruthy();
  });
});
