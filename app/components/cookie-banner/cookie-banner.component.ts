import { ChangeDetectionStrategy, Component, afterNextRender, signal } from '@angular/core';

const STORAGE_KEY = 'winwin-cookie-consent';

type Consent = 'accepted' | 'rejected';

/**
 * Aviso de cookies. La decisión se guarda en localStorage; en SSR
 * el banner no se renderiza hasta que el navegador confirma que no
 * hay una preferencia previa.
 */
@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieBannerComponent {
  protected readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      this.visible.set(this.readConsent() === null);
    });
  }

  protected accept(): void {
    this.saveConsent('accepted');
  }

  protected reject(): void {
    this.saveConsent('rejected');
  }

  private saveConsent(consent: Consent): void {
    try {
      localStorage.setItem(STORAGE_KEY, consent);
    } catch {
      // Almacenamiento no disponible (modo privado): se vuelve a preguntar.
    }
    this.visible.set(false);
  }

  private readConsent(): Consent | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'accepted' || stored === 'rejected' ? stored : null;
    } catch {
      return null;
    }
  }
}
