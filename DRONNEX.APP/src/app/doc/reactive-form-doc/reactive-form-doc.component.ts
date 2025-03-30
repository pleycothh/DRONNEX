
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-reactive-form-doc',
  standalone: true,
  imports: [],
  templateUrl: './reactive-form-doc.component.html',
  styleUrl: './reactive-form-doc.component.css'
})
export class ReactiveFormDocComponent {
  private formBuilder = inject(FormBuilder);

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  constructor() {
  }
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array(
      [this.formBuilder.control('')]
    ),
  });

  updateProfile() {
    console.log(this.profileForm.value);
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'Drew',
      address: {
        street: '123 Drew Street',
        city: 'River Heights',
        zip: '12345',
        state: 'IL'
      },
    });

    
    console.log(this.profileForm.value);

  }


  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
  
}
