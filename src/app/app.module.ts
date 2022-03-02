import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { SeatSelectDirective } from './seat-select.directive';
import { ChangeDirDirective } from './change-dir.directive';
import { ExchangeCalcComponent } from './exchange-calc/exchange-calc.component';
import { ExchangeCurrDirective } from './exchange-curr.directive';
import { ExchangeAmtDirective } from './exchange-amt.directive';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';


const routes = [
  {path: 'form_validator',component:FormValidatorComponent},
  {path: 'seat_booking',component:SeatBookingComponent},
  {path: 'exchange_calc',component:ExchangeCalcComponent},
  {path:'array_methods',component:ArrayMethodsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormValidatorComponent,
    SeatBookingComponent,
    SeatSelectDirective,
    ChangeDirDirective,
    ExchangeCalcComponent,
    ExchangeCurrDirective,
    ExchangeAmtDirective,
    ArrayMethodsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
