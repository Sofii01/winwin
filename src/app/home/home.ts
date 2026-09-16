import { Component } from '@angular/core';

import { HeroComponent } from '../hero/hero';
import { CategoriesComponent } from '../categories/categories';
import { ValuesComponent } from '../values/values';
import { AboutWinwinComponent } from '../about-winwin/about-winwin';
import { HowItWorksComponent } from '../how-it-works/how-it-works';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CategoriesComponent,
    ValuesComponent,
    AboutWinwinComponent,
    HowItWorksComponent,
    ContactComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
