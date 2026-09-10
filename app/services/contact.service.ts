import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { ContactRequest, ContactResponse } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  /** Endpoint real del backend de contacto. */
  private readonly endpoint = '/api/contact';

  /**
   * Mientras no exista el backend devolvemos una respuesta simulada.
   * Poner en `false` para pegarle al endpoint real.
   */
  private readonly useMock = true;

  submit(request: ContactRequest): Observable<ContactResponse> {
    if (this.useMock) {
      return of<ContactResponse>({
        ok: true,
        message: `¡Gracias ${request.fullName}! Te respondemos a la brevedad.`,
      }).pipe(delay(700));
    }

    return this.http.post<ContactResponse>(this.endpoint, request);
  }
}
