import {Component, OnInit} from '@angular/core';
import {Category} from '../models/Category';
import {ProductService} from '../services/ProductService';
import {Product} from '../models/ShopItem';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  selectedCategory: string;

  searchPhrase: string;
  lowerLimit: number = 0;
  upperLimit: number = 0;

  products: Product[];

  constructor(private dataService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  onCategorySelected(category: string) {
    this.dataService.getProductsByCategory(category)
      .subscribe(products => this.products = products,
        error => {
          console.error(error);
          alert('Error when downloading data: ' + error.message);
        });
  }

  onSearchClicked() {
    this.dataService.searchProducts(this.searchPhrase)
      .subscribe(products => this.products = products,
        error => {
          console.error(error);
          alert('Error when downloading data: ' + error.message);
        });
  }

  onFilterClicked() {
    this.dataService.filterProductsByPrice(this.lowerLimit, this.upperLimit)
      .subscribe(products => this.products = products,
        error => {
          console.error(error);
          alert('Error when downloading data: ' + error.message);
        });
  }

  onResetClicked() {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.dataService.getProducts()
      .subscribe(products => this.products = products,
        error => {
          console.error(error);
          alert('Error when downloading data: ' + error.message);
        });
  }
}
