import { Component, EventEmitter, inject, Input, OnInit, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PreFlightCalculatorComponent } from './pre-flight-calculator/pre-flight-calculator.component';
import { ToolSideNavComponent } from './tool-side-nav/tool-side-nav.component';
import { ToolType } from '../sharing/models/tools/tool.model';
import { LiveFlightMonitorComponent } from './live-flight-monitor/live-flight-monitor.component';
import { ImageAnalyzerComponent } from './image-analyzer/image-analyzer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [
    CommonModule,
    ToolSideNavComponent,
    PreFlightCalculatorComponent,
    LiveFlightMonitorComponent,
    ImageAnalyzerComponent
  ],
  templateUrl: './tool.component.html',
  styleUrl: './tool.component.scss'
})
export class ToolComponent  {
  toolType = ToolType; // Reference the enum for use in the template
  selectedTool: ToolType = ToolType.PreFlightCalculator; // Default selected tool

  onToolSelected(tool: ToolType): void {
    this.selectedTool = tool; // Update the selected tool
  }
}
