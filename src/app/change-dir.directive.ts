import { Directive, ElementRef, HostListener } from '@angular/core';
import { SeatbookingService } from './seatbooking.service';

@Directive({
  selector: '[appChangeDir]'
})
export class ChangeDirDirective {
@HostListener('change',['$event']) changefunc(eve:any){
  let n = this.eleref.nativeElement.value;
  this.seatservice.movie_select = n;
  this.seatservice.selectemit.next(n)
}
  constructor(private eleref:ElementRef,private seatservice:SeatbookingService) { }

}
