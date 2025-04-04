import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ToolType } from '../../sharing/models/tools/tool.model';

@Component({
  selector: 'app-tool-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './tool-side-nav.component.html',
  styleUrl: './tool-side-nav.component.scss'
})
export class ToolSideNavComponent {
  @Input() selectedTool!: ToolType; // Receive the selected tool from the parent
  @Output() toolSelected = new EventEmitter<ToolType>(); // Emit the selected tool to the parent
  toolType = ToolType; // Reference the enum for use in the template

  selectTool(tool: ToolType): void {
    this.toolSelected.emit(tool); // Emit the selected tool to the parent
  }

}
