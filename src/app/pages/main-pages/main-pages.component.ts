import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoginService } from '../../common/login.service';

@Component({
  selector: 'app-main-pages',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main-pages.component.html',
  styleUrl: './main-pages.component.scss',
})
export class MainPagesComponent implements OnInit {
  //instead of login:LoginService = new LoginService(); we auto inject service
  isLogin: boolean | undefined;
  constructor(private login: LoginService) {}

  ngOnInit(): void {
    this.isLogin = this.login.isLogin;
  }
}
