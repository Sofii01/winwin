import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ContactRequest, ContactResponse } from '../models/contact.model';


interface ContactApiResponse {
  ok: boolean;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);


  private readonly endpoint = '/api/contact';

  submit(request: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactApiResponse>(this.endpoint, request).pipe(
      map((response) => ({
        ok: response.ok,
        message: response.ok
          ? `¡Gracias ${request.fullName}! Te respondemos a la brevedad.`
          : 'No pudimos guardar tu mensaje. Intentá de nuevo en unos minutos.',
      })),
    );
  }
}

