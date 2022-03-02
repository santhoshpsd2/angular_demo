import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.css']
})
export class FormValidatorComponent implements OnInit {
// @ViewChild('form1') formdata:NgForm;

signupform:FormGroup;
uservalid:boolean;
usertouched:boolean;

  constructor() {

      // this.uservalid = this.signupform.get('username').valid

  }


  ngOnInit(): void {
    this.signupform = new FormGroup(
      {
        'username': new FormControl(null,Validators.required),
        'email': new FormControl(null),
        'password' : new FormControl(null),
        'confirm' :new FormControl(null)
      }
      );


      console.log(this.signupform.get('username')?.errors);

  }

  formsubmit(){
    // let pass = this.signupform.controls['password'].value;
    // let conf_pass = this.signupform.controls['confirm_password'].value;

    // if(pass != conf_pass){
    //   this.match = false;
    // }
    console.log(this.signupform);

  }




}
