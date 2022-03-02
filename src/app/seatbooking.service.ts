import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatbookingService {
seats_booked:number = 0;
movie_select:number = 10;
seatemit = new Subject<number>();
selectemit = new Subject<number>();

  constructor() {

   }
}
