import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';

import { environment } from '../../environments/environment';
import { ContactRequest, ContactResponse } from '../models/contact.model';


interface AppsScriptResponse {
  ok: boolean;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);


  private readonly endpoint = environment.sheetsUrl;

  submit(request: ContactRequest): Observable<ContactResponse> {
    if (!this.endpoint) {
      return throwError(() => new Error('Falta SHEETS_URL en el .env / en las Variables.'));
    }


    return this.http
      .post<AppsScriptResponse>(this.endpoint, JSON.stringify(request), {
        headers: new HttpHeaders({ 'Content-Type': 'text/plain;charset=utf-8' }),
      })
      .pipe(
        map((response) => ({
          ok: response.ok,
          message: response.ok
            ? `¡Gracias ${request.fullName}! Te respondemos a la brevedad.`
            : 'No pudimos guardar tu mensaje. Intentá de nuevo en unos minutos.',
        })),
      );
  }
}

