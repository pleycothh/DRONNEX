import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFlightMonitorComponent } from './live-flight-monitor.component';

describe('LiveFlightMonitorComponent', () => {
  let component: LiveFlightMonitorComponent;
  let fixture: ComponentFixture<LiveFlightMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveFlightMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveFlightMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
