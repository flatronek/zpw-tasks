import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from "../models/Order";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() order: Order;

  @Output() deleteEvent = new EventEmitter<Order>();

  constructor() { }

  ngOnInit() {
  }


  get orderValue(): number {
    if (this.order != null) {
      return this.order.items.map(item => item.price).reduce((previousValue, currentValue) => previousValue + currentValue)
    } else {
      return 0;
    }
  }

  onDeletePressed() {
    this.deleteEvent.emit(this.order);
  }
}
