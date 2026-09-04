import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const AUTOPLAY_INTERVAL_MS = 5000;

// TODO: sumar las 3 imágenes restantes a public/ y completar esta lista.
const HERO_IMAGES = ['/Rectangle 2.png', null, null, null];

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private intervalId?: ReturnType<typeof setInterval>;

  protected readonly images = HERO_IMAGES;
  protected readonly activeIndex = signal(0);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.intervalId = setInterval(() => this.next(), AUTOPLAY_INTERVAL_MS);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  protected goTo(index: number): void {
    this.activeIndex.set(index);
  }

  private next(): void {
    this.activeIndex.set((this.activeIndex() + 1) % this.images.length);
  }
}
