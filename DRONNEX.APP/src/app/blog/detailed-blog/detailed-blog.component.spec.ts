import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBlogComponent } from './detailed-blog.component';

describe('DetailedBlogComponent', () => {
  let component: DetailedBlogComponent;
  let fixture: ComponentFixture<DetailedBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
