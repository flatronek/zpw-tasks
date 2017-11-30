import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/ShopItem";
import {BasketService} from "../services/BasketService";

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: Product;

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
  }

  buyProduct() {
    if (this.product != null) {
      this.basketService.addItemToBasket(this.product);
    }
  }
}
