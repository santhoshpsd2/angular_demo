import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { exchange } from './exchange-calc/exchnage.model';

@Injectable({
  providedIn: 'root'
})


export class ExchangeServiceService {
  curr1data = new Subject<string>();
  cuur2data = new Subject<string>();
  amt1data = new Subject<number>();
  amt2data = new Subject<number>();
  curr1val:string = "USD";
  curr2val:string = "INR";
  amt1val:number = 1;
  amt2val:number;

  constructor(private http:HttpClient) {

   }

   getdata(){
     return this.http.get<exchange>('http://api.exchangeratesapi.io/v1/latest?access_key=811c69115fc79db0e220976dc7a00e0f');
   }
}
