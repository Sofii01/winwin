import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';

import { environment } from '../../environment';
import { ContactRequest, ContactResponse } from './contact.model';

interface AppsScriptResponse {
  ok: boolean;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  private readonly endpoint = environment.googleSheetsUrl;

  submit(request: ContactRequest): Observable<ContactResponse> {
    if (!this.endpoint || this.endpoint.startsWith('PEGA_AQUI')) {
      return throwError(
        () => new Error('Falta configurar googleSheetsUrl en src/app/environment*.ts'),
      );
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
