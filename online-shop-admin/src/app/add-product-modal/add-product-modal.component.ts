import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from "../models/Product";
import {ProductService} from "../services/ProductService";


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit {

  product: Product;

  @Output() productAdded = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = new Product();
  }

  showModal() {
    console.log("Clicked");
    this.product = new Product();
    $('#add-product-modal').modal('show');
  }

  onCreateClicked() {
    this.productService.addProduct(this.product)
      .subscribe(product => {
        console.log("Created: " + JSON.stringify(this.product));
        $('#add-product-modal').modal('hide');
        this.productAdded.emit(product);
      }, error => {
        console.log("Error when adding product: " + error.message);
      })

  }
}
