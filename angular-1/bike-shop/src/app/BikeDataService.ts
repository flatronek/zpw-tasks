import {Injectable} from "@angular/core";
import {Bike} from "./Bike";
import {BIKES} from "./mock-bikes";

@Injectable()
export class BikeDataService {
  getBikes(): Bike[] {
    return BIKES;
  }
}
