import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/AuthService";
import {EnsureAuthenticated} from "./services/EnsureAuthenticated";
import {LoginRedirect} from "./services/LoginRedirect";
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, EnsureAuthenticated, LoginRedirect],
  bootstrap: [AppComponent]
})
export class AppModule { }
