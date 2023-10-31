import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderbookService {
  constructor(private http: HttpClient) {}

  getBidOrders(): Observable<any> {
    return this.http.get('http://localhost:8083/testspring/api/orders/bid/1');
  }
  getAskOrders(): Observable<any> {
    return this.http.get('http://localhost:8083/testspring/api/orders/ask/1');
  }
}