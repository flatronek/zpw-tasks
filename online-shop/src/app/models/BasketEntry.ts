import {Product} from "./ShopItem";

export class BasketEntry {
  shopItem: Product;
  count: number;


  constructor(shopItem: Product) {
    this.shopItem = shopItem;
    this.count = 1;
  }
}
