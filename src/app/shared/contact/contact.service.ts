import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ContactRequest, ContactResponse } from './contact.model';

interface ApiContactResponse {
  ok: boolean;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  submit(request: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ApiContactResponse>('/api/contact', request).pipe(
      map((response) => ({
        ok: response.ok,
        message: response.ok
          ? `¡Gracias ${request.fullName}! Te respondemos a la brevedad.`
          : (response.error ?? 'No pudimos guardar tu mensaje. Intentá de nuevo en unos minutos.'),
      })),
    );
  }
}
