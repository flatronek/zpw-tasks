import {Injectable} from '@angular/core';
import {Product} from '../models/ShopItem';
import {BasketEntry} from '../models/BasketEntry';
import {Order, OrderProduct} from '../models/Order';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';
import {PromoService} from "./PromoService";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BasketService {

  private baseUrl = 'http://localhost:3000/';
  private ordersUrl = this.baseUrl + 'orders';

  private basketItems: BasketEntry[] = [];

  constructor(private http: HttpClient, private promoService: PromoService) {
  }

  getBasketItems() {
    return this.basketItems;
  }

  addItemToBasket(product: Product) {
    console.log(`Adding ${product} to basket.`);
    const item = this.basketItems.find(value => value.shopItem._id == product._id);
    if (item != null) {
      item.count++;
    } else {
      this.basketItems.push(new BasketEntry(product));
    }
  }

  removeItemFromBasket(basketItem: BasketEntry) {
    this.basketItems.splice(this.basketItems.indexOf(basketItem), 1);
  }

  sendOrder(recipientName: string, recipientAddress: string): Observable<Order> {
    const order = this.mapBasketEntriesToOrder(recipientName, recipientAddress, this.basketItems);
    if (this.promoService.hasActivePromo) {
      order.items.forEach(item => item.price = item.price * 0.8);
    }

    return this.http.post<Order>(this.ordersUrl, order, httpOptions)
      .pipe(
        tap(data => {
          console.log(data);
          this.basketItems = [];
        })
      );
  }

  removeProductFromBasket(product: Product) {
    const item = this.basketItems.find(value => value.shopItem == product);
    if (item != null) {
      this.removeItemFromBasket(item);
    }
  }

  getBasketTotalPrice(): number {
    return this.basketItems.map(item => item.shopItem.price * item.count).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  isEmpty() {
    return this.basketItems.length === 0;
  }

  private mapBasketEntriesToOrder(recipientName: string, recipientAddress: string, basketEntries: BasketEntry[]): Order {
    return new Order(null, "1", recipientName, recipientAddress,
      basketEntries.map((entry: BasketEntry) => new OrderProduct(entry.shopItem._id, entry.shopItem.name, entry.count, entry.shopItem.price)),
      "Pending");
  }
}
