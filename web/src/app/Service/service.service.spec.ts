import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';

xdescribe('ServiceService', () => {
  it('should create', () => {
    const mockAfauth = jasmine.createSpy() as any;
    const mockStore = jasmine.createSpy() as any;
    const mockRouter = jasmine.createSpy() as any;
    const component = new ServiceService(mockAfauth, mockStore, mockRouter);
    expect(component).toBeTruthy();
  });
});
