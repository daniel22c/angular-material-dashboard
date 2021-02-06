import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MonthlySales } from '../model/monthly-sales';

// import { MonthlySales } from './monthly-sales';

@Injectable({
  providedIn: 'root'
})

export class SalesService {
  private salesUrl = 'assets/sales.json';

  constructor(private http: HttpClient) { }

  getSalesByMonth(): Observable<MonthlySales[]>{
    return this.http.get<MonthlySales[]>(this.salesUrl).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }
}