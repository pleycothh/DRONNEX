import { Component } from '@angular/core';
import { DetailedPrintComponent } from './detailed-print/detailed-print.component';
import { CommonModule } from '@angular/common';
import { PrintItemComponent } from './print-item/print-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [DetailedPrintComponent, PrintItemComponent, CommonModule],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent {

  items = Array(9).fill(0); // Create an array with 9 items


  /**
   *
   */
  constructor(private router: Router) { 
    
  }

  GetDetail(id: any) {
    console.log('GetDetail', id);
    this.router.navigate(['/print/detail', id]); // Navigate to the detail page URL
  }
}
