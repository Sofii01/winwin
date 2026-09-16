import { Component } from '@angular/core';

import { AboutWinwinComponent } from './about-winwin/about-winwin';
import { HowItWorksComponent } from './how-it-works/how-it-works';
import { ContactComponent } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [AboutWinwinComponent, HowItWorksComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
