import { Directive, HostListener } from '@angular/core';
import { ExchangeServiceService } from './exchange-service.service';

@Directive({
  selector: '[appExchangeCurr]'
})
export class ExchangeCurrDirective {
@HostListener('change',['$event.target']) exhdata(eve:any){
    if(eve.id == 'options1'){
      this.exhserv.curr1data.next(eve.value);
      this.exhserv.curr1val = eve.value;
    }else if(eve.id == 'options2'){
      this.exhserv.cuur2data.next(eve.value);
      this.exhserv.curr2val = eve.value;
    }

}
  constructor(private exhserv:ExchangeServiceService) { }

}
