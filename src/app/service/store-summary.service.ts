import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StoreSummary } from '../model/store-summary';
@Injectable({
  providedIn: 'root'
})
export class StoreSummaryService {
  private summaryUrl = 'assets/summary.json';
  
  constructor(private http: HttpClient) { }
  getStoreSummary():Observable<StoreSummary[]> {
    return this.http.get<StoreSummary[]>(this.summaryUrl);
  }

  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }
}
