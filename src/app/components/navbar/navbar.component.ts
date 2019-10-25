import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.authService.authState.subscribe (value => this.loggedIn = value)
  }

  logout() {
    this.authService.logout();
  }

}
