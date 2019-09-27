import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../.././services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  public error = []
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  
  }

  constructor(private http:HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }

  signup() {
    return this.auth.signup(this.form);
    
  }

}
