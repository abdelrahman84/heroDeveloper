import { Component, OnInit } from '@angular/core';
import {AuthService} from '../.././services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public error 
  
  public form = {

    email: null,
    password: null
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  
  login() {
    return this.auth.login(this.form);
  }

  

}
