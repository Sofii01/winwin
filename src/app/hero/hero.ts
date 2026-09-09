import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const AUTOPLAY_INTERVAL_MS = 5000;

const HERO_IMAGES = ['assests/hero1.jpeg', 'assests/hero2.jpeg', 'assests/hero3.jpeg', 'assests/hero4.jpeg'];

interface ProjectCard {
  tag: string;
  tone: 'sustentable' | 'inversion' | 'donacion';
  image: string;
  title: string;
  description: string;
  progressPercent: number;
  raised: string;
  goal: string;
  investors: number;
  daysLeft: number;
}

interface Tab {
  label: string;
  active: boolean;
}

const PROJECT_CARDS: ProjectCard[] = [
  {
    tag: 'Sustentable',
    tone: 'sustentable',
    image: 'assests/card.jpg',
    title: 'Compostaje comunitario de baños',
    description:
      'La comunidad Wichi del norte de Arequipa (Perú) no cuenta con instalaciones de baños para sus necesidades básicas.',
    progressPercent: 70,
    raised: '$ 912.018 recaudados',
    goal: '70% de $1.100.000',
    investors: 214,
    daysLeft: 12,
  },
  {
    tag: 'Inversión',
    tone: 'inversion',
    image: 'assests/card.jpg',
    title: 'Compostaje comunitario de baños',
    description:
      'La comunidad Wichi del norte de Arequipa (Perú) no cuenta con instalaciones de baños para sus necesidades básicas.',
    progressPercent: 70,
    raised: '$ 912.018 recaudados',
    goal: '70% de $1.100.000',
    investors: 214,
    daysLeft: 12,
  },
  {
    tag: 'Donación',
    tone: 'donacion',
    image: 'assests/card.jpg',
    title: 'Compostaje comunitario de baños',
    description:
      'La comunidad Wichi del norte de Arequipa (Perú) no cuenta con instalaciones de baños para sus necesidades básicas.',
    progressPercent: 70,
    raised: '$ 912.018 recaudados',
    goal: '70% de $1.100.000',
    investors: 214,
    daysLeft: 12,
  },
];

const TABS: Tab[] = [
  { label: 'Favoritos de Win Win', active: true },
  { label: 'Recién publicados', active: false },
  { label: 'Cerca de tu zona', active: false },
  { label: 'Más votados', active: false },
];

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

  protected readonly tabs = TABS;
  protected readonly cards = PROJECT_CARDS;
  protected readonly pageDots = [0, 1, 2, 3, 4];
  protected activePage = 0;
  protected readonly peopleRow = Array.from({ length: 14 }, (_, index) => index);

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

  protected selectTab(tab: Tab): void {
    this.tabs.forEach((t) => (t.active = t === tab));
  }

  protected prevPage(): void {
    const count = this.pageDots.length;
    this.activePage = (this.activePage - 1 + count) % count;
  }

  protected nextPage(): void {
    const count = this.pageDots.length;
    this.activePage = (this.activePage + 1) % count;
  }
}
