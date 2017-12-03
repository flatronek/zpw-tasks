import { Component, OnInit } from '@angular/core';
import {BasketService} from '../services/BasketService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  recipientName: string;
  recipientAddress: string;

  constructor(private basketService: BasketService, private router: Router) { }

  ngOnInit() {
  }

  sendOrder() {
    this.basketService.sendOrder(this.recipientName, this.recipientAddress)
      .subscribe(order => {
        this.router.navigateByUrl("/shop");
        alert("Thank you for your purchase.");
      }, error => {
        console.log("Error: " + error.message);
        alert("Error: " + error.message);
      })
  }
}
