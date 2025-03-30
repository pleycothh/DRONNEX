import { Injectable } from '@angular/core';
import { BaseHttp } from '../sharing/services/base-http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestEntity } from '../sharing/models/requestEntity.model';
import { ProductEditor } from '../sharing/models/productEditor.model';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PrintService extends BaseHttp   {

  constructor(http: HttpClient) {
    super(http);
  }

}
