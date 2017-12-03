import * as io from 'socket.io-client';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PromoService {

  private wsUrl = "http://localhost:3000";

  private socket;

  hasActivePromo: boolean = false;

  connect(): Observable<object> {
    let observable = new Observable(observer => {
      this.socket = io(this.wsUrl);

      this.socket.on('message', (data) => {
        this.hasActivePromo = data["status"] == "active";
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}


class PromoObject {
  timeLeft: number;
  promo: number;
}
