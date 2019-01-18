import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      EmailId: new FormControl('',[Validators.required,Validators.email])
     });
  }

  goHome(){
    this.router.navigateByUrl('home');
  }

}
