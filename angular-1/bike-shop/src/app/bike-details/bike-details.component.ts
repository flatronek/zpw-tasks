import {Component, Input, OnInit} from '@angular/core';
import {Bike} from "../Bike";

@Component({
  selector: 'bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  @Input() bike: Bike;

  constructor() { }

  ngOnInit() {
  }

}
