import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let mockAfauth: any;
  let mockStore: any;
  let mockRouter: any;
  let service: ServiceService;

  beforeEach(() => {
    mockAfauth = {
      authState: { subscribe: jasmine.createSpy() },
      signInWithEmailAndPassword: jasmine.createSpy(),
      signOut: jasmine.createSpy(),
    } as any;
    mockStore = jasmine.createSpy() as any;
    mockRouter = jasmine.createSpy() as any;
    service = new ServiceService(mockAfauth, mockStore, mockRouter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(mockAfauth.authState.subscribe).toHaveBeenCalled();
  });

  it('login', () => {
    const user = 'user';
    const passwd = 'passwd';
    service.login(user, passwd);
    expect(mockAfauth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      user,
      passwd
    );
  });

  it('logout', () => {
    service.logout();
    expect(mockAfauth.signOut).toHaveBeenCalled();
  });
});
