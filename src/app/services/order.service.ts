import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  //URL:string="http://localhost:3000/orders";
  URL: string = "https://my-json-server.typicode.com/hema-anand/bake-my-cake-data/orders";
  
  constructor(private http: HttpClient) { }

  add(order: Order): Observable<Order> {
    console.log(order);
    return this.http.post<Order>(this.URL, order);

  }
}
