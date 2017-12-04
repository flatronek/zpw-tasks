import {Injectable} from "@angular/core";
import {Product} from "../models/Product";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {AuthService, HTTP_OPTIONS} from "./AuthService";


@Injectable()
export class ProductService {

  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, HTTP_OPTIONS)
      .pipe(
        tap((product: Product) => console.log("Added product: " + product))
      );
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product._id}`;
    return this.http.delete<Product>(url, HTTP_OPTIONS)
      .pipe(
        tap((product: Product) => console.log("Deleted product: " + product))
      );

  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product._id}`;
    return this.http.put<Product>(url, product, HTTP_OPTIONS)
      .pipe(
        tap((product: Product) => console.log("Updated product: " + product))
      );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl, HTTP_OPTIONS)
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
