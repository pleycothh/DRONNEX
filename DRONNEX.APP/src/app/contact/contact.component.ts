import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.applyBootstrapValidation();
  }

  private applyBootstrapValidation(): void {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      const htmlForm = form as HTMLFormElement;
      htmlForm.addEventListener('submit', event => {
        if (!htmlForm.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        htmlForm.classList.add('was-validated');
      }, false);
    });
  }
}