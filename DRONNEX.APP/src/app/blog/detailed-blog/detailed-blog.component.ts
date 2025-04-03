import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; // Import Location service

@Component({
  selector: 'app-detailed-blog',
  standalone: true,
  imports: [],
  templateUrl: './detailed-blog.component.html',
  styleUrls: ['./detailed-blog.component.scss']
})
export class DetailedBlogComponent implements OnInit, OnChanges{
  id: string; // Property to store the index

  constructor(private route: ActivatedRoute, private location: Location) {} // Inject Location service

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    console.log('Index from URL:', this.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  goBack(): void {
    this.location.back(); // Navigate back to the previous page
  }
}