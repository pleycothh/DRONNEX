import { effect, Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {


  darkModelSignal = signal<string>( 'light'); // Default value

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedValue = window.localStorage.getItem('darkMode');
      if (storedValue) {
        this.darkModelSignal.set(JSON.parse(storedValue));
      }

      effect(() => {
        window.localStorage.setItem('darkMode', JSON.stringify(this.darkModelSignal()));
      });
    }
  }

  updateDarkMode() {
    this.darkModelSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }
}