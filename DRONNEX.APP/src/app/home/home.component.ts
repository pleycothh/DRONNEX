import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    docsUrl = environment.docuUrl;// + '/docs/intro';  doc/blog/ccid

    droneWithAIUrl = environment.docuUrl + '/docs/project/ai-drone-cn'; 
    vtolUrl = environment.docuUrl + '/docs/project/3d-printed-vtol'; // project/3d-printed-vtol
    simpleFOCUrl = environment.docuUrl + '/docs/category/field-oriented-control-foc';
    bee25Url = environment.docuUrl + '/docs/FPV/bee-25';
    FpvUrl = environment.docuUrl + '/docs/category/fpv';
    espBotUrl = environment.docuUrl + '/docs/project/foc-balance-bot';
  constructor(private router: Router) {}

  redirectToUrl(url: string) {
    window.location.href = url;
  }


}
