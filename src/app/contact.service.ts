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

  private readonly endpoint = environment.googleSheetsUrl;

  submit(request: ContactRequest): Observable<ContactResponse> {
    if (!this.endpoint || this.endpoint.startsWith('PEGA_AQUI')) {
      return throwError(
        () => new Error('Falta configurar googleSheetsUrl en src/environments/environment*.ts'),
      );
    }

    // Apps Script no responde al preflight OPTIONS que dispara un
    // Content-Type "application/json". Mandando el JSON como texto plano
    // el navegador la trata como petición simple y no hay preflight.
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

