import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ToolEntity, ToolOperator, ToolResult, ToolRow } from '../sharing/models/tools/tool.model';
import { FormsModule } from '@angular/forms';
import { ToolService } from './tool.service';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.scss'
})
export class ToolComponent implements OnChanges  {
  
  toolEntity: ToolEntity = {
    id: '',
    name: '',
    valueOne: 0,
    valueTwo: 0,
    operator: ToolOperator.plus
  };

  toolResult: ToolResult = {
    id: '',
    value: 0
  };

  toolOperator = ToolOperator; // Expose enum to template

  toolRow: ToolRow[] = [];

  /**
   *
   */
  constructor(
    private ts: ToolService
  ) {
    
  }
  ngOnInit() {
    // Initial setup if productForm is already available
    this.get();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Update form values whenever productForm input changes
  }

  calc() {
    console.log('Calculation triggered!');

    this.ts.calc(this.toolEntity).subscribe({
      next: (src: ToolResult) => {
        this.toolResult = src;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
      },
      complete: () => {
        console.log('Calculation complete');
      }
    });

    // Convert operator string to enum
    const operator = Number(this.toolEntity.operator) as ToolOperator;
  
    switch (operator) {
      case ToolOperator.plus:
        this.toolResult.value = this.toolEntity.valueOne + this.toolEntity.valueTwo;
        break;
      case ToolOperator.minus:
        this.toolResult.value = this.toolEntity.valueOne - this.toolEntity.valueTwo;
        break;
      case ToolOperator.multiply:
        this.toolResult.value = this.toolEntity.valueOne * this.toolEntity.valueTwo;
        break;
      case ToolOperator.divide:
        if (this.toolEntity.valueTwo !== 0) {
          this.toolResult.value = this.toolEntity.valueOne / this.toolEntity.valueTwo;
        } else {
          console.error('Division by zero is not allowed!');
          this.toolResult.value = 0; // Handle division by zero
        }
        break;
      default:
        console.error('Invalid operator!');
        this.toolResult.value = 0; // Handle invalid operator
        break;

     
   
    }
  
    console.log('Calculation result:', this.toolResult.value);
  }

  save() {
    // Append the current toolEntity and toolResult to the toolRow array
    const newRow: ToolRow = {
      toolEntity: { ...this.toolEntity }, // Create a copy of the current toolEntity
      toolResult: { ...this.toolResult }  // Create a copy of the current toolResult
    };
  
    this.toolRow.push(newRow); // Add the new row to the table
    console.log('Save triggered! Current table rows:', this.toolRow);
  }
  
  delete(index: number) {
    // Remove the row at the specified index
    this.toolRow.splice(index, 1);
    console.log('Row deleted! Current table rows:', this.toolRow);
  }
  
  get() {
    // Handle get logic here
    let response: ToolEntity = {
      id: '123',
      name: 'name here',
      valueOne: 1,
      valueTwo: 1,
      operator: 2 // Default operator (e.g., `ToolOperator.plus`)
    };

    this.toolEntity = response;

    
    console.log('Get triggered!', this.toolEntity);
  }

}
