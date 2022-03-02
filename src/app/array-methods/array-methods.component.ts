import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface user {
  info:{seed:string,results:number,page:number,version:string},
  results:[{name:{title:string,first:string,last:string}}]
}

export interface userdata {
  fname : string,
  lname : string,
  wealth : number,
  format :string
}

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.css']
})
export class ArrayMethodsComponent implements OnInit {
  total:boolean = false;
  totalwealth:number;
  totalformat:string;
data:userdata[] = [
  {
    fname: 'Santhosh',
    lname: 'kumar',
    format: this.formtmoney(2345678),
    wealth: 2345678
  },
  {
    fname: 'Jagadish',
    lname: 'S',
    format:this.formtmoney(1234569),
    wealth:1234569
  }
]
  constructor(private http:HttpClient) {

   }

  ngOnInit(): void {

  }

  adduser(){
    this.http.get<user>('https://randomuser.me/api/').subscribe(dat => {
      let ret = dat.results[0].name;
      let fname = ret.first;
      let lname = ret.last;
      let random = Math.floor(Math.random()*100000000);
      let obj:userdata = {
        fname :fname,
        lname : lname,
        wealth : random,
        format : this.formtmoney(random)
      }
      this.data.push(obj);
      if(this.total){
        this.calcwealth();
      }
    })
  }

  doublemoney(){
    this.data = this.data.map((val:userdata) => {
      val.wealth = val.wealth *2;
      return val;
    })
  }

  formtmoney(num:number){
   return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  calcwealth(){
    this.total = true;
    this.totalwealth = this.data.reduce((acc,val)=>{
      acc += val.wealth;
      return acc;
    },0);
    this.totalformat = this.formtmoney(this.totalwealth);
  }
}
