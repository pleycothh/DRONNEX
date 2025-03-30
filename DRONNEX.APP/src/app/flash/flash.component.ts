import { Component, OnInit} from '@angular/core';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';
import { FlashService } from './flash.service';
import { RequestEntity } from '../sharing/models/requestEntity.model';
import { ProductResult } from '../sharing/models/productResult.model';
import { ProductEntity } from '../sharing/models/productEntity.model';
import { ProductLookup } from '../sharing/models/productLookup.model';
import { CommonModule } from '@angular/common';
import { FormControl,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditor } from '../sharing/models/productEditor.model';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductForm } from '../sharing/models/ProductForm.model';
import { NavTopGroupComponent } from '../nav-top-group/nav-top-group.component';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css'],
  standalone: true,
  imports: [
    
    CommonModule,
    FormsModule,
    //ReactiveFormsModule,
    ProductFormComponent,
    ProductViewerComponent,

  ]
})
export class FlashComponent implements OnInit {

  // this quest entity is null will have issue
  // in selection of dropdown
  requestEntity: RequestEntity = {
    initialized: true,
    framCode: 'bee35',
    motorCode: 'tmotorF60',
    propellerCode: 'hq5043',
    fcCode: 'mambaF405',
    batteryCode: 'tattu1300mah6s',
  };

 productForm: ProductForm;

  productResult: ProductResult
  /**
   *
   */

  weight: number = 0;
  width: number = 0;

  constructor(    
    private fs: FlashService, 
  ) {
  }

  ngOnInit() {

     this.calc();
  }

  onDropdownChange(entity:string, value: string) {
    if(entity == 'fram') this.requestEntity.framCode = value;
    if(entity == 'motor') this.requestEntity.motorCode = value;
    if(entity == 'propeller') this.requestEntity.propellerCode = value;
    if(entity == 'fc') this.requestEntity.fcCode = value;
    if(entity == 'battery') this.requestEntity.batteryCode = value;
    this.calc();
  }

  onCalc(event: RequestEntity) {
    console.log('onCalc', event);
    this.requestEntity = event;
    this.calc();
  }

  calc(): void {
    console.log('requestEntity', this.requestEntity);
    this.fs.calc(this.requestEntity).subscribe({
      next: (src: ProductEditor) => {
        console.log('return src', src);

        // update product form
     //   this.productEntity = src.productForm.productEntity;
     //   this.productLookups = src.productForm.productLookups;
        this.productForm = src.productForm;
        // update product result
        this.productResult = src.productResult;

        
    //    console.log('src-end', this.productEntity);

        this.weight = src.productForm.productEntity.framEntity.weight;
        this.width = src.productForm.productEntity.framEntity.width;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
      },
      complete: () => {
        this.requestEntity.initialized = true;
        console.log('Calculation complete');
      }
    });
  }
}
