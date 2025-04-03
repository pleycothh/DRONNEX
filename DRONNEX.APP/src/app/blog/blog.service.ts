import { Injectable } from '@angular/core';
import { BaseHttp } from '../sharing/services/base-http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { BlogDetailEntity } from '../sharing/models/blog/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BaseHttp {

  constructor(http: HttpClient) {
    super(http);
  }

  
    // get by id or null, return full table
    getBlogDetail(id: string): Observable<BlogDetailEntity> {
      return this.http.get<BlogDetailEntity>(`${this.apiUrl}/blog/get/${id}`).pipe(
        catchError(this.handleError)
      );
    }

    
}
