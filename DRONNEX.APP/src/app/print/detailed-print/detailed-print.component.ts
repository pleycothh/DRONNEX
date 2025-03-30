import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-print',
  standalone: true,
  imports: [],
  templateUrl: './detailed-print.component.html',
  styleUrl: './detailed-print.component.css'
})
export class DetailedPrintComponent {
  id: string;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ''; // Retrieve 'id' parameter
    console.log('Detail ID:', this.id);
  }
}
