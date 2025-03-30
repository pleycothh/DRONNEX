import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewerComponent } from './product-viewer.component';

describe('ProductViewerComponent', () => {
  let component: ProductViewerComponent;
  let fixture: ComponentFixture<ProductViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
