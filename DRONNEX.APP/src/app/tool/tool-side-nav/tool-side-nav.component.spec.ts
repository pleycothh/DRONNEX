import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolSideNavComponent } from './tool-side-nav.component';

describe('ToolSideNavComponent', () => {
  let component: ToolSideNavComponent;
  let fixture: ComponentFixture<ToolSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolSideNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
