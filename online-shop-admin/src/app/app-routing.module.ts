import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {LoginRedirect} from "./services/LoginRedirect";
import {EnsureAuthenticated} from "./services/EnsureAuthenticated";
import {ProductsComponent} from "./products/products.component";
import {OrdersComponent} from "./orders/orders.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate:[LoginRedirect]},
  {path: 'products', component: ProductsComponent, canActivate:[EnsureAuthenticated]},
  {path: 'categories', component: CategoriesComponent, canActivate:[EnsureAuthenticated]},
  {path: 'orders', component: OrdersComponent, canActivate:[EnsureAuthenticated]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
