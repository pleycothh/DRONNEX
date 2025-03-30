
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseWebConnection } from './base-web-connection';
import { Observable, map } from 'rxjs';

export abstract class BaseHttp extends BaseWebConnection {
    /**
     *
     */
    constructor(public http: HttpClient) {
        super();
        
    }

    protected get apiUrl(): string {
        return `${this.baseUrl}/api`;
    }

    // Blob
    protected getBlob(url: string) {
        return this.http.get<Blob>(url, { observe: 'response', responseType: 'blob'  as 'json'}).pipe(map(response => {
            return  this.onBlobResponse(response);
        }));
    }

    protected postBlob(url: string, param: any): Observable<BlobFile> {
        return this.http.post<Blob>(url, param, { observe: 'response', responseType: 'blob'  as 'json'}).pipe(map(response => {
            return  this.onBlobResponse(response);
        }));    }

    protected onBlobResponse(response: HttpResponse<Blob>) {
        const contentDisposition = response.headers.get('content-disposition');
        let fileName = 'file';
        return <BlobFile>{
            name: fileName,
            blob: response.body
        }
    }



}
export interface BlobFile {
    name: string;
    blob: Blob;
}
