import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { ExchangeServiceService } from '../exchange-service.service';
import { exchange } from './exchnage.model';

@Component({
  selector: 'app-exchange-calc',
  templateUrl: './exchange-calc.component.html',
  styleUrls: ['./exchange-calc.component.css']
})
export class ExchangeCalcComponent implements OnInit,OnDestroy {
  @ViewChild('opt1') option1:ElementRef;
  @ViewChild('opt2') option2:ElementRef;
  amount1:number;
  amount2:number;
currnames:any;
currdata:exchange;
curr1:string;
curr2:string;
exval:number;
dummy:number =10;
sub1:Subscription;
sub2:Subscription;
sub3:Subscription;
sub4:Subscription;
  constructor(private exchserv:ExchangeServiceService) {
    setTimeout(()=>{
      this.option1.nativeElement.value = "USD";
      this.option2.nativeElement.value = "INR";
    },1000)

   }

  ngOnInit(): void {
    this.exchserv.getdata().pipe(tap((d)=>{
      this.currnames =Object.keys(d.rates);
    })).subscribe(dat => {
      this.currdata = dat;
      console.log(this.currdata);
      this.update(1)
    })

 this.sub1 = this.exchserv.curr1data.subscribe((dat1:string) =>{
    console.log('curr1',dat1);
    this.exchserv.curr1val = dat1;
    this.update(1);
  })

 this.sub2 = this.exchserv.cuur2data.subscribe((dat2:string)=>{
    console.log('curr2',dat2);
    this.exchserv.curr2val = dat2;
    this.update(1)
  })

this.sub3 = this.exchserv.amt1data.subscribe((num1:number)=>{
    console.log('num1',num1);
    this.exchserv.amt1val = num1;
    this.update(1)
  })

 this.sub4 = this.exchserv.amt2data.subscribe((num2:number)=>{
    console.log('num2',num2);
    this.update(1)
  })


  }


  unsuball(){
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
  }


  update(swap:any){
    let rates = this.currdata.rates;
    let index1:any = this.exchserv.curr1val;
    let index2:any = this.exchserv.curr2val;

    if(swap == 'swap'){
      let temp = index1;
      index1 = index2;
      index2 = temp;
      this.exchserv.curr1val = index1;
      this.exchserv.curr2val = index2;
    }

    let amt1 = this.exchserv.amt1val;
    let amt2 = this.exchserv.amt2val;

    this.curr1 = index1;
    this.curr2 = index2;

    let val1 = +rates[index1];
    let val2 = +rates[index2];

    let x:any = val2 / val1;
    this.exval = x;

    this.amount1 = amt1;
    this.amount2 = x * amt1;

  }



  swapfunc(){
    let temp = this.option1.nativeElement.value;
    this.option1.nativeElement.value = this.option2.nativeElement.value;
    this.option2.nativeElement.value = temp;

    this.update('swap');
  }

  ngOnDestroy(): void {
      this.unsuball();
  }
}
