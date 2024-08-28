import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  Logout() {
    this.isLogin = false;
    this.userName = null;
    // localStorage.clear()
    localStorage.removeItem('isLogin');
    localStorage.removeItem('userName');
  }
  userName: string | undefined | null;
  logMe(user: string, password: string, _route: Router, binary: boolean) {
    if (user == 'Abdo' && password == '123') {
      this.isLogin = true;
      this.userName = user;
      _route.navigate(['/home']);
      if (binary) {
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('userName', this.userName);
      }
    }
  }
  isLogin = false;
  constructor() {
    if (localStorage.getItem('isLogin') == 'true') {
      this.isLogin = true;
      this.userName = localStorage.getItem('userName');
    }
  }
}
