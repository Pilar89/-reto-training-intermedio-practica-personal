import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  it('should create', () => {
    const mockFormBuilder = { group: () => null } as any;
    const mockMessageService = jasmine.createSpy() as any;
    const mockAuthService = jasmine.createSpy() as any;
    const mockRoute = jasmine.createSpy() as any;

    const component = new RegistroComponent(
      mockFormBuilder,
      mockMessageService,
      mockAuthService,
      mockRoute
    );
    expect(component).toBeTruthy();
  });
});
