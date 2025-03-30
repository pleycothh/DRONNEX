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

export class FlashService extends BaseHttp   {

  constructor(http: HttpClient) {
    super(http);
  }

  calc(requestEntity: RequestEntity): Observable<ProductEditor> {
    return this.http.post<ProductEditor>(`${this.apiUrl}/product/calc`, requestEntity).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (typeof ErrorEvent !== 'undefined' && error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
