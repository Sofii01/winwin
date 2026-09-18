import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ContactRequest } from './contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  submit(request: ContactRequest): Observable<{ ok: boolean; message: string }> {
    return of({
      ok: true,
      message: 'Gracias, recibimos tu mensaje. Te contactaremos a la brevedad.',
    }).pipe(delay(800));
  }
}
