import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'politica-de-privacidad', component: PrivacyPolicyComponent },
];
