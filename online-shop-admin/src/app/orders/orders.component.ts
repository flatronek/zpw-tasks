import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../services/OrdersService";
import {Order} from "../models/Order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(private service: OrdersService) { }

  ngOnInit() {
    this.service.getOrders()
      .subscribe(orders => {
        this.orders = orders;
      }, error => {
        alert("Orders downloading error: " + error.message);
      })
  }

  deleteOrder(order: Order) {
    this.service.deleteOrder(order)
      .switchMap(order => this.service.getOrders())
      .subscribe(orders => {
        this.orders = orders;
      }, error => {
        alert("Failed to delete: " + error.message);
      })
  }
}
