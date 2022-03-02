import { Directive, HostListener } from '@angular/core';
import { ExchangeServiceService } from './exchange-service.service';

@Directive({
  selector: '[appExchangeAmt]'
})
export class ExchangeAmtDirective {
  @HostListener('input',['$event.target']) exhnum(eve:any){
    if(eve.id == 'num1'){
      this.excservice.amt1data.next(eve.value);
      this.excservice.amt1val = eve.value;
    }else if(eve.id == 'num2'){
      this.excservice.amt2data.next(eve.value);
      this.excservice.amt2val = eve.value;
    }
  }

  constructor(private excservice:ExchangeServiceService) { }

}
