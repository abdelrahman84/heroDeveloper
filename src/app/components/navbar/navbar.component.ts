import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.authState.subscribe (value => this.loggedIn = value)
  }

}
