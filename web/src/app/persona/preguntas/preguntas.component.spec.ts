import { PreguntasComponent } from './preguntas.component';

describe('PreguntasComponent', () => {
  it('should create', () => {
    const mockService = jasmine.createSpy() as any;
    const mockAuthService = { getUserLogged: () => null } as any;

    const component = new PreguntasComponent(mockService, mockAuthService);
    expect(component).toBeTruthy();
  });
});
