import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormArray} from '@angular/forms';
import { ProductLookup } from '../../sharing/models/productLookup.model';
import { ProductForm } from '../../sharing/models/ProductForm.model';
import { CellsType, ProductEntity } from '../../sharing/models/productEntity.model';
import { RequestEntity } from '../../sharing/models/requestEntity.model';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnChanges {
  
  private formBuilder = inject(FormBuilder);
  
  
  @Input() productForm: ProductForm | null = null; // Initialize as null
  @Output() onCalc = new EventEmitter<RequestEntity>();


  productLookups: ProductLookup | null = null; // Initialize as null
  productEntity: ProductEntity | null = null; // Initialize as null

  requestEntity: RequestEntity = {
    initialized: false,
    framCode: '',
    motorCode: '',
    propellerCode: '',
    fcCode: '',
    batteryCode: ''
  };


  profileForm = this.formBuilder.group({
    framCode: ['', Validators.required],
    motorCode: ['', Validators.required],
    propellerCode: ['', Validators.required],
    fcCode: ['', Validators.required],
    batteryCode: ['', Validators.required],
    frameDetails: [{ value: '', disabled: true }],
    motorDetails: [{ value: 0, disabled: true }],
    propellerDetails: [{ value: '', disabled: true }],
    fcDetails: [{ value: '', disabled: true }],
    batteryDetails: [{ value: 0, disabled: true }]
  });

  ngOnInit() {
    // Initial setup if productForm is already available
    if (this.productForm) {
      this.updateFormValues();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Update form values whenever productForm input changes
    if (changes['productForm'] && this.productForm) {
      this.updateFormValues();
    }
  }

  updateFormValues() {
    if (this.productForm) {
      this.productLookups = this.productForm.productLookups;
      this.profileForm.patchValue({
        framCode: this.productForm.productEntity.framEntity.code,
        motorCode: this.productForm.productEntity.motorEntity.code,
        propellerCode: this.productForm.productEntity.propsEntity.code,
        fcCode: this.productForm.productEntity.flightControlEntity.code,
        batteryCode: this.productForm.productEntity.batteryEntity.code,
        frameDetails: this.productForm.productEntity.framEntity.name,
        motorDetails: this.productForm.productEntity.motorEntity.kvValue,
        propellerDetails: this.productForm.productEntity.propsEntity.name,
        fcDetails: this.productForm.productEntity.flightControlEntity.name,
        batteryDetails: this.productForm.productEntity.batteryEntity.capacity
      });
    }
  }

  clickAnalysis(): void {
    console.log('src-start', this.profileForm.value);

    if (this.profileForm.value) {
      this.requestEntity.framCode = this.profileForm.value.framCode ?? '';
      this.requestEntity.motorCode = this.profileForm.value.motorCode ?? '';
      this.requestEntity.propellerCode = this.profileForm.value.propellerCode ?? '';
      this.requestEntity.fcCode = this.profileForm.value.fcCode ?? '';
      this.requestEntity.batteryCode = this.profileForm.value.batteryCode ?? '';
    }

    this.onCalc.emit(this.requestEntity);
  }
}