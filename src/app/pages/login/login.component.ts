import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple, RippleModule } from 'primeng/ripple';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoginService } from '../../common/login.service';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- Add this line

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    Button,
    RippleModule,
    InputTextModule,
    CheckboxModule,
    Ripple,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private _login: LoginService, private _router: Router) {}
  binary: boolean = false;
  handleLogin() {
    this._login.logMe(this.username, this.password, this._router, this.binary);
    // console.log(this.username);
    // console.log(this.password);
  }
}
