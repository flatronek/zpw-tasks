import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Category} from "../models/Category";
import {ProductService} from "../services/ProductService";
import {Product} from "../models/ShopItem";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  readonly ITEMS_PER_PAGE = 3;

  @Input() category: Category;

  products: Product[];

  currentPage: number = 1;
  pagesCount: number = 0;

  constructor(private dataService: ProductService) {
  }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.category.currentValue != null) {
      this.dataService.getProductsCountByCategory(this.category)
        .subscribe(productsCount => {
          this.pagesCount = this.calculatePagesCount(productsCount);
          this.currentPage = 1;
        }, error => {
          console.error(error);
          alert("Error when downloading data: " + error.message);
        });

      this.dataService.getProductsByCategory(changes.category.currentValue, 0, this.ITEMS_PER_PAGE)
        .subscribe(products => this.products = products,
          error => {
            console.error(error);
            alert("Error when downloading data: " + error.message);
          });

      // console.log(`Category changed, totalProductsCount ${totalProductsCount}, pagesCount ${this.pagesCount}, page products: ${this.products.length}`);
    }
  }

  onPageChanged(page: number) {
    if (page > 0 && page <= this.pagesCount) {
      this.currentPage = page;
      this.dataService.getProductsByCategory(this.category, (page - 1) * this.ITEMS_PER_PAGE, this.ITEMS_PER_PAGE)
        .subscribe(products => this.products = products,
          error => {
            console.error(error);
            alert("Error when downloading data: " + error.message);
          });
    }
  }

  get pages(): number[] {
    return Array(this.pagesCount).fill(0).map((value, index) => index + 1);
  }

  private calculatePagesCount(itemsCount: number): number {
    return Math.ceil(itemsCount / this.ITEMS_PER_PAGE);
  }
}
