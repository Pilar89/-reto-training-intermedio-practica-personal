import { EditAswerComponent } from './edit-answer.component';

describe('EditAswerComponent', () => {
  it('should create', () => {
    const mockModalService = jasmine.createSpy() as any;
    const mockModalServiceEdit = jasmine.createSpy() as any;
    const mockServices = jasmine.createSpy() as any;
    const mockFormBuilder = { group: () => null } as any;
    const mockMessageService = jasmine.createSpy() as any;
    const mockAuthService = jasmine.createSpy() as any;

    const component = new EditAswerComponent(
      mockModalService,
      mockModalServiceEdit,
      mockServices,
      mockFormBuilder,
      mockMessageService,
      mockAuthService
    );
    expect(component).toBeTruthy();
  });
});
