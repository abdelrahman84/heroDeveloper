import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api'

  constructor(private http:HttpClient) { }


  signup(data){
    return this.http.post(`${this.baseUrl}/signup`, data).subscribe(
      data => console.log(data),
      error => console.log('error', error)
    )
  }

  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data).subscribe(
      data => console.log(data),
      error => console.log('error', error)
    )
  }
}
