import { Component } from '@angular/core';

import { HeroComponent } from '../hero/hero';
import { CategoriesComponent } from '../categories/categories';
import { ValuesComponent } from '../values/values';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, CategoriesComponent, ValuesComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
