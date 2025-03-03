import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiCallService {
  constructor(private httpClient: HttpClient) {
  }

  postRequest(apiUrl, requestBody, paramHeaders?): Observable<any> {
    return this.httpClient.post<any>(apiUrl, requestBody);
  }

  postRequestWithBlob(apiUrl, requestBody, type?): Observable<any> {
    return this.httpClient.post(apiUrl, requestBody, { responseType: 'blob' })
      .pipe(
        map(res => new Blob([res], { type }))
      );
  }
  //for get
  getRequestWithBlob(apiUrl, type?): Observable<any> {
    return this.httpClient.get(apiUrl, { responseType: 'blob' })
      .pipe(
        map(res => new Blob([res], { type }))
      );
  }
  putRequest(apiUrl, requestBody, paramHeaders?) {
    return this.httpClient.put<any>(apiUrl, requestBody);
  }

  getRequest(apiUrl, params?, paramHeaders?): Observable<any> {
    return this.httpClient.get<any>(apiUrl, { params });
  }

  deleteRequest(apiUrl, params?, paramHeaders?): Observable<any> {
    return this.httpClient.delete<any>(apiUrl, { params });
  }

}
