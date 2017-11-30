import { Component, OnInit } from '@angular/core';
import {BasketService} from "../services/BasketService";
import {BasketEntry} from "../models/BasketEntry";

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {

  basketItems: BasketEntry[];

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    console.log("Basket: " + this.basketService.getBasketItems());
    this.basketItems = this.basketService.getBasketItems();
  }


  removeItem(item: BasketEntry) {
    this.basketService.removeItemFromBasket(item);
  }

  get totalPrice() {
    return this.basketService.getBasketTotalPrice();
  }
}
