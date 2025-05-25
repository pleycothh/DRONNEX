import { Injectable } from '@angular/core';
import { BaseHttp } from '../sharing/services/base-http';
import { HttpClient } from '@angular/common/http';
import { ToolEntity, ToolResult, ResponseCode, ToolRow } from '../sharing/models/tools/tool.model';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService extends BaseHttp {

  constructor(http: HttpClient) {
    super(http);
  }

  // send tool entity, return result value
  calc(requestEntity: ToolEntity): Observable<ToolResult> {
    return this.http.post<ToolResult>(`${this.apiUrl}/product/calc`, requestEntity).pipe(
      catchError(this.handleError)
    );
  }

  // save by post tool entity, return success or error
  save(requestEntity: ToolEntity): Observable<ResponseCode> {
    return this.http.post<ResponseCode>(`${this.apiUrl}/product/save`, requestEntity).pipe(
      catchError(this.handleError)
    );
  }

  // get by id or null, return full table
  get(toolId: string): Observable<ToolRow[]> {
    return this.http.get<ToolRow[]>(`${this.apiUrl}/product/get/${toolId}`).pipe(
      catchError(this.handleError)
    );
  }

  // delete by id, return success or error
  delete(toolId: string): Observable<ResponseCode> {
    return this.http.delete<ResponseCode>(`${this.apiUrl}/product/delete/${toolId}`).pipe(
      catchError(this.handleError)
    );
  }
}
