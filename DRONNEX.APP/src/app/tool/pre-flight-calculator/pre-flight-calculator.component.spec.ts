import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFlightCalculatorComponent } from './pre-flight-calculator.component';

describe('PreFlightCalculatorComponent', () => {
  let component: PreFlightCalculatorComponent;
  let fixture: ComponentFixture<PreFlightCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreFlightCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreFlightCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
