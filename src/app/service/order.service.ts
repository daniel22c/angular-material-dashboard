import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../model/order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersUrl = 'assets/orders.json';

  constructor(private http: HttpClient) { }
  getOrderCount(): Observable<Order>{
    return this.http.get<Order>(this.ordersUrl).pipe(catchError(this.handleError));
  }
  getOrders(): Observable<Order>{
    return this.http.get<Order>(this.ordersUrl).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }
}

