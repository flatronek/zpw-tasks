import { Component, OnInit } from '@angular/core';
import {Category} from "../models/Category";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  selectedCategory: Category;

  onCategorySelected(category: Category) {
    this.selectedCategory = category;
  }

}
