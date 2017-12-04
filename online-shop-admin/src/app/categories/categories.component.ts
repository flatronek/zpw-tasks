import {Component, OnInit} from '@angular/core';
import {PromoService} from "../services/PromoService";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  promoDiscount: number;
  promoDuration: number;

  constructor(private promoService: PromoService) {
  }

  ngOnInit() {
  }

  addPromoClicked() {
    if (!isNullOrUndefined(this.promoDuration) && !isNullOrUndefined(this.promoDiscount)
      && this.promoDuration >= 0 && this.promoDiscount >= 0) {
      this.promoService.addPromo(this.promoDuration, this.promoDiscount)
        .subscribe(_ => {
          alert("Promo added!");
        }, error => {
          alert("Error: " + error.message);
        });
    }
  }
}
