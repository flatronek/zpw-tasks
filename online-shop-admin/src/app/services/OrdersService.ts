import {Order} from "../models/Order";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Injectable} from "@angular/core";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrdersService {

  private ordersUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl, httpOptions)
      .pipe(
        tap((orders: Order[]) => console.log("Orders downloaded: " + orders))
      );
  }

  deleteOrder(order: Order): Observable<Order> {
    const url = `${this.ordersUrl}/${order._id}`;
    return this.http.delete<Order>(url, httpOptions)
      .pipe(
        tap((orders: Order) => console.log("Orders deleted: " + orders))
      );
  }
}
