import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlogItemEntity } from '../../sharing/models/blog/blog.model';
import { DetailedBlogComponent } from '../detailed-blog/detailed-blog.component';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [DetailedBlogComponent],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {

  @Input() item: BlogItemEntity;
  @Output() click = new EventEmitter<string>(); // Output event emitter for click events

  
  constructor() {
    
  }
  GetDetail(id: string): void {
    console.log('Get Blog Item Detail:', id);
    this.click.emit(id); // Emit the ID to the parent component
  }
}
