import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy';
import { TermsComponent } from './terms/terms';
import { SecurityPolicyComponent } from './security-policy/security-policy';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'politica-de-privacidad', component: PrivacyPolicyComponent },
  { path: 'terminos-y-condiciones', component: TermsComponent },
  { path: 'politica-de-seguridad', component: SecurityPolicyComponent },
];
