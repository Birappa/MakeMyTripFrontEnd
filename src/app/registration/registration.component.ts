import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    // userList: User[]=[];
   heading ='Registration-Form';
   form: FormGroup;


   Submit(form): void {
   //console.log(form.value);
   //console.log(this.form.value);
  //  this.userList.push(this.form.value);
  // var user: User;
  // user=form.value;
  // this.userList.push(user);
   }   
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
     UserName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+'),Validators.minLength(5)]),
     Password: new FormControl('',[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),Validators.minLength(8)]),
     ConfirmPassword: new FormControl('',[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),Validators.minLength(8)]),
     EmailId: new FormControl('',[Validators.required,Validators.email]),
     ContactNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)])
    });
  }

}
