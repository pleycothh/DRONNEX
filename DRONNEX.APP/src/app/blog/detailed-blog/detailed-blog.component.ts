import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; // Import Location service
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailed-blog',
  standalone: true,
  imports: [],
  templateUrl: './detailed-blog.component.html',
  styleUrls: ['./detailed-blog.component.scss']
})
export class DetailedBlogComponent implements OnInit, OnChanges{
  id: string; // Property to store the index
  blogData: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute, 
    private location: Location) {} // Inject Location service

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.http.get('/api/blog/123').subscribe((data) => {
      this.blogData = data;
    });  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  goBack(): void {
    this.location.back(); // Navigate back to the previous page
  }
}