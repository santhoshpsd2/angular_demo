import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { SeatbookingService } from './seatbooking.service';

@Directive({
  selector: '[appSeatSelect]'
})
export class SeatSelectDirective {

  constructor(public eleref:ElementRef,private seatservice:SeatbookingService) {

  }

  @HostBinding('class.selected')selectvar:boolean = false;

@HostListener('click') highlight()
{
  this.selectvar = !this.selectvar;
  if(this.selectvar){
    this.seatservice.seats_booked++;
  }else{
    this.seatservice.seats_booked--;
  }
  let n = this.seatservice.seats_booked;
  console.log(n);

  this.seatservice.seatemit.next(n);
}
}
