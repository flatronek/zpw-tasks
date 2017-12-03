import {Injectable} from "@angular/core";
import {Category} from "../models/Category";
import {PRODUCTS} from "../mock-data";
import {Product} from "../models/ShopItem";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map, tap} from "rxjs/operators";

@Injectable()
export class ProductService {

  private baseUrl = 'http://localhost:3000/';
  private categoriesUrl = this.baseUrl + 'categories';  // URL to web api
  private productsUrl = this.baseUrl + 'products';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<string[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map((products: Product[]) => Array.from(new Set(products.map(product => product.category))))
      );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(data => console.log(data))
      );
  }

  getProductsCountByCategory(category: string): Observable<number> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map(products => (products as Product[]).length)
      );
  }

  getProductsByCategory(category: string, offset = 0, limit = 0): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map((products: Product[]) => products.filter(product => product.category == category)),
        tap(data => console.log(data))
      );
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map((products: Product[]) => products.filter(product => product.name.includes(query) || product.category.includes(query) || product.desc.includes(query) )),
        tap(data => console.log(data))
      );
  }

  filterProductsByPrice(lowerPrice = 0, upperPrice = 0): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map((products: Product[]) => products.filter(product => product.price > lowerPrice && (upperPrice <= 0 || product.price < upperPrice))),
        tap(data => console.log(data))
      );
  }
}
