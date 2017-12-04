import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PromoService {

  private promoUrl = 'http://localhost:3000/promo';

  constructor(private http: HttpClient) {
  }

  addPromo(duration: number, discount: number): Observable<any> {
    return this.http.post<any>(this.promoUrl, new PromoBody(duration, discount), httpOptions);
  }
}


class PromoBody {
  time: number;
  promo: number;


  constructor(time: number, promo: number) {
    this.time = time;
    this.promo = promo;
  }
}
