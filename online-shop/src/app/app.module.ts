import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {ProductService} from "./services/ProductService";
import {ProductListComponent} from './product-list/product-list.component';
import {ProductListItemComponent} from './product-list-item/product-list-item.component';
import {AppRoutingModule} from './/app-routing.module';
import {BasketListComponent} from './basket-list/basket-list.component';
import {ShopComponent} from './shop/shop.component';
import {BasketService} from "./services/BasketService";
import {BasketComponent} from './basket/basket.component';
import {OrderComponent} from './order/order.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    ProductListComponent,
    ProductListItemComponent,
    BasketListComponent,
    ShopComponent,
    BasketComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, BasketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
