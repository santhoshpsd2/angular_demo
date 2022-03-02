import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeatbookingService } from '../seatbooking.service';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit,OnDestroy{
  seats:number = 0;
  price:number;
  amount:number = 0;
  seatsub:Subscription;
  selectsub:Subscription;

  constructor(private seatservice:SeatbookingService) {

   }

  ngOnInit(): void {
  this.seatsub =  this.seatservice.seatemit.subscribe(num =>{
      this.seats = num;
      this.price = this.seatservice.movie_select;
      this.calc();
    })

  this.selectsub =  this.seatservice.selectemit.subscribe(num =>{
      this.price = num;
      this.seats = this.seatservice.seats_booked;
      this.calc();
    })
  }

  calc(){
    this.amount = this.seats * this.price;
  }

  ngOnDestroy(): void {
      this.seatsub.unsubscribe();
      this.selectsub.unsubscribe();
  }
}
