import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from '../models/ShopItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {

  readonly ITEMS_PER_PAGE = 3;

  @Input() products: Product[];
  @Output() pageChanged = new EventEmitter<number>();

  displayedProducts: Product[];

  pagesCount: number = 0;
  currentPage: number = 1;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products.currentValue != null) {
      this.pagesCount = this.calculatePagesCount(this.products.length);
      this.currentPage = 1;

      this.selectDisplayed();
    }
  }

  onPageChanged(page: number) {
    if (page > 0 && page <= this.pagesCount) {
      this.currentPage = page;
      this.selectDisplayed();
    }
  }

  get pages(): number[] {
    return Array(this.pagesCount).fill(0).map((value, index) => index + 1);
  }

  private calculatePagesCount(itemsCount: number): number {
    return Math.ceil(itemsCount / this.ITEMS_PER_PAGE);
  }

  private selectDisplayed() {
    let start = (this.currentPage - 1) * this.ITEMS_PER_PAGE;
    this.displayedProducts = this.products.slice(start, start + this.ITEMS_PER_PAGE);
  }
}
