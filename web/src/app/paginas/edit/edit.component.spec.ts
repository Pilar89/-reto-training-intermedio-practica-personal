import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  it('should create', () => {
    const mockitomodalService = jasmine.createSpy() as any;
    const mockitoauthService = jasmine.createSpy() as any;
    const mockitoservices = jasmine.createSpy() as any;
    const mockitomessageService = jasmine.createSpy() as any;

    const component = new EditComponent(
      mockitomodalService,
      mockitoauthService,
      mockitoservices,
      mockitomessageService
    );

    expect(component).toBeTruthy();
  });
});
