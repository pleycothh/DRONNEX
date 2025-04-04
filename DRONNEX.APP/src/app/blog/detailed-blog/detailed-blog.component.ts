import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common'; // Import Location service
import { HttpClient } from '@angular/common/http';
import { BlogEntity } from '../../sharing/models/blog/blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-detailed-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailed-blog.component.html',
  styleUrls: ['./detailed-blog.component.scss']
})
export class DetailedBlogComponent implements OnInit, OnChanges{
  id: string; // Property to store the index
  blogData: BlogEntity;;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute, 
    private location: Location,
    private bs: BlogService) {} // Inject Location service

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.bs.getBlogDetail(this.id).subscribe((data: BlogEntity) => {
      this.blogData = data; // Assign the blog data to the property
    });
  console.log(this.blogData); // Log the blog data to the console

  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  goBack(): void {
    this.location.back(); // Navigate back to the previous page
  }
}