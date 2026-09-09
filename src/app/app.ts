import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar';
import { HeroComponent } from './hero/hero';
import { CategoriesComponent } from './categories/categories';
import { ValuesComponent } from './values/values';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    CategoriesComponent,
    ValuesComponent,
  ],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('winwin');
}
