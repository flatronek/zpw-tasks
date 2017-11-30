import { Component, OnInit } from '@angular/core';
import {BasketService} from "../services/BasketService";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  ngOnInit() {
  }

  get isEmpty() {
    return this.basketService.isEmpty();
  }
}
