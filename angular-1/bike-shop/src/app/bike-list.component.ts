import {Component, OnInit} from '@angular/core';
import {BIKES} from "./mock-bikes";
import {Bike} from "./Bike";
import {BikeDataService} from "./BikeDataService";

@Component({
  selector: 'bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css'],
  providers: [BikeDataService]
})
export class BikeListComponent implements OnInit {

  title = 'Bike shop';
  bikes = [];
  selectedBike: Bike;


  constructor(private bikeDataService: BikeDataService) {}

  ngOnInit(): void {
    this.bikes = this.bikeDataService.getBikes();
  }

  onBikeSelected(bike: Bike) {
    this.selectedBike = bike;
  }

  get totalBikesCount(): number {
    return this.bikes.map(bike => bike.count).reduce((acc, value) => acc + value);
  }

  addToOrder(bike: Bike) {
    if (bike.count > 0) {
      bike.count--;
      bike.order++;
    }
  }

  removeFromOrder(bike: Bike) {
    if (bike.order > 0) {
      bike.count++;
      bike.order--;
    }
  }
}
