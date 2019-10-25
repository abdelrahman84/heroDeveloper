import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.less']
})
export class ResponseResetComponent implements OnInit {

  public error

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }

  constructor(private auth: AuthService, private route: ActivatedRoute) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    })
  }

  ngOnInit() {
  }

  resetPassword(){
     this.auth.changePassword(this.form);
  }

}
