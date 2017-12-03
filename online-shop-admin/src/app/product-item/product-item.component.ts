import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../models/Product";
import {ProductService} from "../services/ProductService";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() productRemoveAction = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }


  onDeleteClicked() {
    this.productRemoveAction.emit(this.product);
  }

  onSaveClicked() {
    this.productService.updateProduct(this.product)
      .subscribe(product => {
        console.log("PRODUCT SAVED");
        alert(`Product saved successfully.`);
      }, error => {
        console.log("onSaveClicked ERROR: " + error.message);
        alert(`Failed to save product: ${error.message}`);
      })
  }
}
