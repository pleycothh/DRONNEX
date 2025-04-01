import { Injectable } from '@angular/core';
import { BaseHttp } from '../sharing/services/base-http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToolEntity, ToolResult, ResponseCode, ToolRow } from '../sharing/models/tools/tool.model';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService extends BaseHttp {

  constructor(http: HttpClient) {
    super(http);
  }

  // send tool entity, return result value
  calc(requestEntity: ToolEntity): Observable<ToolResult> {
    return this.http.post<ToolResult>(`${this.apiUrl}/tool/calc`, requestEntity).pipe(
      catchError(this.handleError)
    );
  }

  // save by post tool entity, return success or error
  save(requestEntity: ToolEntity): Observable<ResponseCode> {
    return this.http.post<ResponseCode>(`${this.apiUrl}/tool/save`, requestEntity).pipe(
      catchError(this.handleError)
    );
  }

  // get by id or null, return full table
  get(toolId: string): Observable<ToolRow[]> {
    return this.http.get<ToolRow[]>(`${this.apiUrl}/tool/get/${toolId}`).pipe(
      catchError(this.handleError)
    );
  }

  // delete by id, return success or error
  delete(toolId: string): Observable<ResponseCode> {
    return this.http.delete<ResponseCode>(`${this.apiUrl}/tool/delete/${toolId}`).pipe(
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
