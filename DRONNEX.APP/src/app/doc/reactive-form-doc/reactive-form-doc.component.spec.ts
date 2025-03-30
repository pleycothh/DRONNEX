import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDocComponent } from './reactive-form-doc.component';

describe('ReactiveFormDocComponent', () => {
  let component: ReactiveFormDocComponent;
  let fixture: ComponentFixture<ReactiveFormDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
