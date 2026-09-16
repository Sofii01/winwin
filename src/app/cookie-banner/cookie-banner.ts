import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

const STORAGE_KEY = 'winwin_cookie_consent';

interface CookieConsent {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
}

@Component({
  selector: 'app-cookie-banner',
  imports: [RouterLink],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.css',
})
export class CookieBannerComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly isVisible = signal(false);
  protected readonly isPreferencesOpen = signal(false);
  protected readonly analyticsEnabled = signal(false);
  protected readonly marketingEnabled = signal(false);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const stored = this.readConsent();
    if (!stored) {
      this.isVisible.set(true);
      return;
    }

    this.analyticsEnabled.set(stored.analytics);
    this.marketingEnabled.set(stored.marketing);
  }

  protected acceptAll(): void {
    this.saveConsent(true, true);
  }

  protected rejectAll(): void {
    this.saveConsent(false, false);
  }

  protected openPreferences(): void {
    this.isPreferencesOpen.set(true);
  }

  protected closePreferences(): void {
    this.isPreferencesOpen.set(false);
  }

  protected toggleAnalytics(): void {
    this.analyticsEnabled.set(!this.analyticsEnabled());
  }

  protected toggleMarketing(): void {
    this.marketingEnabled.set(!this.marketingEnabled());
  }

  protected savePreferences(): void {
    this.saveConsent(this.analyticsEnabled(), this.marketingEnabled());
  }

  private saveConsent(analytics: boolean, marketing: boolean): void {
    this.analyticsEnabled.set(analytics);
    this.marketingEnabled.set(marketing);

    const consent: CookieConsent = {
      necessary: true,
      analytics,
      marketing,
      decidedAt: new Date().toISOString(),
    };

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    }

    this.isVisible.set(false);
    this.isPreferencesOpen.set(false);
  }

  private readConsent(): CookieConsent | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CookieConsent) : null;
    } catch {
      return null;
    }
  }
}
