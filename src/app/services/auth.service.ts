import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api'

  private iss = {
    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  }

  private logged = new BehaviorSubject <boolean> (this.loggedIn());

  authState = this.logged.asObservable();

  changeAuthStatus (value: boolean) {
    this.logged.next(value);
  }

  constructor(private http:HttpClient, private router: Router) { }


  signup(data){
    return this.http.post(`${this.baseUrl}/signup`, data).subscribe(
      data => this.handleToken(data),
      error => console.log('error', error)
    )
  }


  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data).subscribe(
      data => this.handleToken(data),
      error => console.log('error', error)
    )
  }

  handleToken(token) {
    this.setToken(token.access_token);
    this.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {

    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.getToken();

    if (token) {
  
      const payload = this.payload(token);
        
       if (payload) {
         return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
       }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid(); 
  }
}
