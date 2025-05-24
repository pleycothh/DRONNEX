import { Component, inject, signal } from '@angular/core';
import { DarkModeService } from '../sharing/services/dark-mode.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-nav-top-group',
  standalone: true,
  imports: [ 
    CommonModule
  ],
  templateUrl: './nav-top-group.component.html',
  styleUrl: './nav-top-group.component.scss'
})
export class NavTopGroupComponent {
  darkModeService: DarkModeService = inject(DarkModeService);
  selectedIcon: string = 'moon'; // Default selected icon
  docsUrl = environment.docuUrl;// + '/docs/intro';

constructor() { }
//darkModeService.darkModeService
  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
    console.log(this.darkModeService.darkModelSignal(), 'mode');
  }

}
