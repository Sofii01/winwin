import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const AUTOPLAY_INTERVAL_MS = 5000;

interface Category {
  title: string;
  description: string;
  image: string;
}

const CATEGORIES: Category[] = [
  {
    title: 'Ambiental',
    description:
      'Proyectos que cuidan el planeta desde lo local: reciclaje, energías limpias, espacios verdes y consumo responsable.',
    image: 'assests/ambiental.jpeg',
  },
  {
    title: 'Tecnológico',
    description:
      'Soluciones digitales o técnicas que resuelven un problema real y hacen más accesible el conocimiento o los servicios.',
    image: 'assests/tecnologico.jpeg',
  },
  {
    title: 'Cultural',
    description:
      'Proyectos que mejoran la vida de personas y comunidades: inclusión, acceso a oportunidades y bienestar colectivo.',
    image: 'assests/cultural.jpeg',
  },
  {
    title: 'Social',
    description:
      'Iniciativas que preservan, crean o acercan valores a la comunidad: donaciones, alimentos, educación creativa y expresiones solidarias.',
    image: 'assests/Social.jpeg',
  },
  {
    title: 'Voluntarios',
    description:
      'No hace falta poner dinero para sumar. Hay proyectos que necesitan tiempo, habilidades o manos más que fondos. Encuentra el que se ajuste a lo que vos podés dar.',
    image: 'assests/voluntarios.jpeg',
  },
];

@Component({
  selector: 'app-categories',
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private intervalId?: ReturnType<typeof setInterval>;

  protected readonly categories = CATEGORIES;
  protected readonly pageDots = CATEGORIES.map((_, index) => index);
  protected readonly activePage = signal(0);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.intervalId = setInterval(() => this.next(), AUTOPLAY_INTERVAL_MS);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  protected selectPage(index: number): void {
    this.activePage.set(index);
  }

  private next(): void {
    this.activePage.set((this.activePage() + 1) % this.categories.length);
  }
}
