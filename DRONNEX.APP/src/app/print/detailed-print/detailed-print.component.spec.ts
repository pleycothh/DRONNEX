import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPrintComponent } from './detailed-print.component';

describe('DetailedPrintComponent', () => {
  let component: DetailedPrintComponent;
  let fixture: ComponentFixture<DetailedPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedPrintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
