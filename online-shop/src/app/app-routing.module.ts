import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShopComponent} from "./shop/shop.component";
import {BasketComponent} from "./basket/basket.component";
import {OrderComponent} from "./order/order.component";

const routes: Routes = [
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'shop', component: ShopComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
