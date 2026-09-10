import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutWinwinComponent } from './sections/about-winwin/about-winwin.component';
import { CategoriesComponent } from './sections/categories/categories.component';
import { ContactComponent } from './sections/contact/contact.component';
import { HeroComponent } from './sections/hero/hero.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ValuesComponent } from './sections/values/values.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ProjectsComponent,
    ValuesComponent,
    AboutWinwinComponent,
    CategoriesComponent,
    HowItWorksComponent,
    ContactComponent,
    CookieBannerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly title = 'WinWinDream';
}
