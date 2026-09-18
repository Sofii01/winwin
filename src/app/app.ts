import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar';
import { CookieBannerComponent } from './cookie-banner/cookie-banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CookieBannerComponent],
  templateUrl: './app.html',
})
export class App {}
