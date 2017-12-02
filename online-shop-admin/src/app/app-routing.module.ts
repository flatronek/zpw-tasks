import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {LoginRedirect} from "./services/LoginRedirect";
import {EnsureAuthenticated} from "./services/EnsureAuthenticated";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate:[LoginRedirect]},
  {path: 'products', component: ProductsComponent, canActivate:[EnsureAuthenticated]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
