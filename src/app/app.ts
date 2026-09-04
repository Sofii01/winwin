import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar';
import { HeroComponent } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroComponent],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('winwin');
}
