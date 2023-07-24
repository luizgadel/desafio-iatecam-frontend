import { Injectable } from '@angular/core';

const JWT_TOKEN = 'token';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
  ) {}

  getJwtToken() {
    return localStorage.getItem(JWT_TOKEN);
  }

  isLoggedIn() {
    return this.getJwtToken();
  }



}
