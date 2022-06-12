import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievePasswordComponent } from './retrieve-password.component';

describe('RetrievePasswordComponent', () => {
  it('should create', () => {
    const mockFormBuilder = { group: () => null } as any;
    const mockAuthService = jasmine.createSpy() as any;
    const mockRouter = jasmine.createSpy() as any;

    const component = new RetrievePasswordComponent(
      mockFormBuilder,
      mockAuthService,
      mockRouter
    );
    expect(component).toBeTruthy();
  });
});
