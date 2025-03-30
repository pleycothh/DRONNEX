import { CellsType, ProductEntity } from '../../sharing/models/productEntity.model';
import { ProductResult } from '../../sharing/models/productResult.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Component, OnInit, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-product-viewer',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-viewer.component.html',
  styleUrl: './product-viewer.component.css'
})
export class ProductViewerComponent implements OnInit, AfterViewInit {

  
  @Input() productResult: ProductResult;
  @ViewChild('chart', { static: true }) private chartContainer: ElementRef;
  private data = [
    { current: 1, voltage: 3 },
    { current: 2, voltage: 6 },
    { current: 3, voltage: 9 },
    { current: 4, voltage: 12 },
    { current: 20, voltage: 15}
  ];
  /**
   *
   */
  constructor() {
    
  }

  ngOnInit() {
    
    if (this.productResult == null) {
      
      console.log('result is null');
    }
    else {
    //  console.log('result is not null');
     console.log('result is not null', this.productResult);
     
    this.createChart();
    }
  }
  ngAfterViewInit() {
    //this.createChart();
  }
  

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 530 + element.offsetWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(element).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear().domain([0, d3.max(this.data, d => d.current) || 0]).range([0, width]);
    const y = d3.scaleLinear().domain([0, d3.max(this.data, d => d.voltage) || 0]).range([height, 0]);

    const line = d3.line<{ current: number, voltage: number }>()
      .x(d => x(d.current))
      .y(d => y(d.voltage));

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));

    svg.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);
  }

}
