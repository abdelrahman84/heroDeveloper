import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.less']
})
export class RequestResetComponent implements OnInit {

  public error

  public form = {
    email: null
  }

  constructor(private auth: AuthService)  { }

  ngOnInit() {
  }

  resetPassword(email) {
    this.auth.resetPassword(this.form);
    console.log(this.form.email)
    this.form.email = null;
  }

}
