import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { LoginService } from '../../common/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    ToastModule,
    BadgeModule,
    InputTextModule,
    AvatarModule,
    CommonModule,
    RippleModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(public _login: LoginService, private _router: Router) {}
  logOut($event: MouseEvent) {
    this._login.Logout();
    $event.preventDefault();
    this._router.navigate(['/login']);
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home',
      },
      {
        label: 'DashBoard',
        icon: 'pi pi-star',
        routerLink: 'home/dashboard',
      },
      {
        label: 'About',
        icon: 'pi pi-eye',
        routerLink: 'home/about',
      },
    ];
  }
}
