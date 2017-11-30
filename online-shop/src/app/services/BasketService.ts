import {Injectable} from "@angular/core";
import {Product} from "../models/ShopItem";
import {BasketEntry} from "../models/BasketEntry";

@Injectable()
export class BasketService {

  private basketItems: BasketEntry[] = [];

  getBasketItems() {
    return this.basketItems;
  }

  addItemToBasket(product: Product) {
    console.log(`Adding ${product} to basket.`);
    let item = this.basketItems.find(value => value.shopItem == product);
    if (item != null) {
      item.count++;
    } else {
      this.basketItems.push(new BasketEntry(product));
    }
  }

  removeItemFromBasket(basketItem: BasketEntry) {
    this.basketItems.splice(this.basketItems.indexOf(basketItem), 1);
  }

  removeProductFromBasket(product: Product) {
    let item = this.basketItems.find(value => value.shopItem == product);
    if (item != null) {
      this.removeItemFromBasket(item)
    }
  }

  getBasketTotalPrice() {
    return this.basketItems.map(item => item.shopItem.price * item.count).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  isEmpty() {
    return this.basketItems.length == 0;
  }
}
