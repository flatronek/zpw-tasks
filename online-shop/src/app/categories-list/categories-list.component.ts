import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from "../services/ProductService";
import {Category} from "../models/Category";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  allCategories: Category[];

  @Output() onCategorySelected = new EventEmitter<Category>();
  selectedCategory: Category;

  constructor(private dataService: ProductService) {
  }

  ngOnInit() {
    this.dataService.getCategories()
      .subscribe(categories => this.allCategories = categories,
        error => {
          console.error(error);
          alert("Error when downloading data: " + error.message);
        })
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.onCategorySelected.emit(category);
  }
}
