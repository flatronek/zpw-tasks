import {Injectable} from "@angular/core";
import {Category} from "../models/Category";
import {PRODUCTS} from "../mock-data";
import {Product} from "../models/ShopItem";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map, tap} from "rxjs/operators";

@Injectable()
export class ProductService {

  private baseUrl = 'http://localhost:5500/';
  private categoriesUrl = this.baseUrl + 'categories';  // URL to web api
  private productsUrl = this.baseUrl + 'products';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        tap(data => console.log(data))
      )
  }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductsCountByCategory(category: Category): Observable<number> {
    let url = `${this.productsUrl}?categoryId=${category.id}`;
    return this.http.get<Product[]>(url)
      .pipe(
        map(products => (products as Product[]).length)
      )
  }

  getProductsByCategory(category: Category, offset: number = 0, count: number = 0): Observable<Product[]> {
    let pagination = {
      $skip: offset,
      $limit: count,
      categoryId: category.id
    };
    let url = `${this.productsUrl}?${JSON.stringify(pagination)}`;

    return this.http.get<Product[]>(url)
      .pipe(
        tap(data => console.log(data))
      );
  }
}
