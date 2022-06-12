import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAswerComponent } from './edit-answer.component';

xdescribe('EditAswerComponent', () => {
  let component: EditAswerComponent;
  let fixture: ComponentFixture<EditAswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAswerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
