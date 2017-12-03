import {Injectable} from "@angular/core";
import {Product} from "../models/Product";
import {Observable} from "rxjs/Observable";
import {MOCK_PRODUCTS} from "../mocks";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {filter, map, tap} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {

  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions)
      .pipe(
        tap((product: Product) => console.log("Added product: " + product))
      );
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product._id}`;
    return this.http.delete<Product>(url, httpOptions)
      .pipe(
        tap((product: Product) => console.log("Deleted product: " + product))
      );

  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product._id}`;
    return this.http.put<Product>(url, product, httpOptions)
      .pipe(
        tap((product: Product) => console.log("Updated product: " + product))
      );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl, httpOptions)
      .pipe(
        tap((product: Product[]) => console.log("Products retrieved"))
      );
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.getProducts()
      .pipe(
        map(products => products.filter(product => product.name.includes(query) || product.category.includes(query)))
      )
  }
}
