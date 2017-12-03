import {Component, OnDestroy, OnInit} from '@angular/core';
import {PromoService} from "./services/PromoService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'app';

  private subscription;

  timeLeftSeconds: number;
  timeLeftMinutes: number;
  discountText: string;
  promoActive: boolean;

  constructor(private promoService: PromoService) {
  }

  ngOnInit(): void {
    this.promoService.connect();

    this.subscription = this.promoService.connect()
      .subscribe(message => {
        console.log("Promo msg: " + JSON.stringify(message));
        this.promoActive = message["status"] == "active";
        if (this.promoActive) {
          this.discountText = message["promo"];

          this.timeLeftMinutes = Math.floor(message["timeLeft"] / (60 * 1000));
          this.timeLeftSeconds = Math.floor(message["timeLeft"] % (60 * 1000) / 1000);
        }
      }, error => {
        console.log("WS ERROR: " + error.message);
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
