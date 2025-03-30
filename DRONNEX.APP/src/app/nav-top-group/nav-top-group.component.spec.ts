import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopGroupComponent } from './nav-top-group.component';

describe('NavTopGroupComponent', () => {
  let component: NavTopGroupComponent;
  let fixture: ComponentFixture<NavTopGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTopGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTopGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
