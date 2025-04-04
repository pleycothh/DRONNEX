import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  redirectToBlog(index: string): void {
    this.router.navigate(['/blog/detail', index]); // Navigate to the blog page with the given index
  }


}
