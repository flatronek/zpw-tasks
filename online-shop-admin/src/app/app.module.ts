import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/AuthService";
import {EnsureAuthenticated} from "./services/EnsureAuthenticated";
import {LoginRedirect} from "./services/LoginRedirect";
import {ProductsComponent} from './products/products.component';
import {CategoriesComponent} from './categories/categories.component';
import {OrdersComponent} from './orders/orders.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {AddProductModalComponent} from './add-product-modal/add-product-modal.component';
import {ProductService} from "./services/ProductService";
import {OrderItemComponent} from './order-item/order-item.component';
import {OrdersService} from "./services/OrdersService";
import {HttpClientModule} from "@angular/common/http";
import {PromoService} from "./services/PromoService";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    ToolbarComponent,
    ProductItemComponent,
    AddProductModalComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    EnsureAuthenticated,
    LoginRedirect,
    ProductService,
    OrdersService,
    PromoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
