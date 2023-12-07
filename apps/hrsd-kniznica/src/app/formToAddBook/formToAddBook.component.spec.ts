import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormToAddBookComponent } from './formToAddBook.component';

describe('FormToAddBookComponent', () => {
  let component: FormToAddBookComponent;
  let fixture: ComponentFixture<FormToAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormToAddBookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormToAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
