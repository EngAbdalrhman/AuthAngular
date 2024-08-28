import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginService } from './common/login.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  title = 'AuthAngular';
  eventSubscription: any;
  isLogin: boolean | undefined;
  constructor(
    private login: LoginService,
    private _router: Router,
    private primengConfig: PrimeNGConfig
  ) {
    this.eventSubscription = _router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // this.isLogin = this.login.isLogin;
        let url = event.url.toString();
        if (this.login.isLogin) {
          // login users
          if (url.includes('login')) {
            this._router.navigate(['/home']);
          }
        } else {
          // not login users
          if (url.includes('home')) {
            this._router.navigate(['/login']);
          }
        }
      }
    });
    this.primengConfig.ripple = true;
  }
  // not needed in main component cuz if it destroyed the app stop
  ngOnDestroy(): void {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
