import {Component, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {ProductService} from "../services/ProductService";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  searchPhrase: string = "";

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  onProductAdded(product: Product) {
    console.log("On product added: ");
    this.products.splice(0, 0, product);
    this.getProducts()
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product)
      .switchMap(product => this.productService.getProducts())
      .subscribe(products => {
        this.products = products;
      }, error => {
        console.log("Error when deleting product: " + error.message);
      })
  }

  searchClicked() {
    if (this.searchPhrase != "") {
      this.productService.searchProducts(this.searchPhrase)
        .subscribe(products => {
          this.products = products;
        }, error => {
          console.log("Error when retrieving products: " + error.message);
        });
    } else {
      this.getProducts();
    }
  }

  private getProducts() {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      }, error => {
        console.log("Error when retrieving products: " + error.message);
      })
  }
}
