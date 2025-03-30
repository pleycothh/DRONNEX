import { Component, inject,HostBinding} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavTopGroupComponent } from './nav-top-group/nav-top-group.component';
import { FooterComponent } from './footer/footer.component';
import { DarkModeService } from './sharing/services/dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavTopGroupComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  darkModeService: DarkModeService = inject(DarkModeService);
  
  @HostBinding('attr.data-bs-theme') get theme() {
    return this.darkModeService.darkModelSignal();
  }
  constructor(
    private titleService: Title) {

    this.titleService.setTitle("fpv")
  }
}
