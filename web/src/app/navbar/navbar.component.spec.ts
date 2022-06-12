import { NavbarComponent } from './navbar.component';

// https://es.wikipedia.org/wiki/Pruebas_de_humo

describe('NavbarComponent', () => {
  it('should create', () => {
    // creo dos objetos mock requeridos por el componente
    const mockAuthService = jasmine.createSpyObj('authService', [
      'getUserLogged',
    ]);
    const mockRouter = jasmine.createSpy() as any;

    // creo el componente pasandole los objetos mock
    const component = new NavbarComponent(mockAuthService, mockRouter);
    // verifico que el componente este creado
    expect(component).toBeTruthy();
    // opcional: verifico que se haya llamado un metodo en el servicio
    expect(mockAuthService.getUserLogged).toHaveBeenCalled();
  });
});
