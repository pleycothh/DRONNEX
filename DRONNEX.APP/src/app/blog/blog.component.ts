import { Component } from '@angular/core';
import { DetailedBlogComponent } from './detailed-blog/detailed-blog.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [DetailedBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
