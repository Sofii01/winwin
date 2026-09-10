import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  input,
  model,
  signal,
} from '@angular/core';

export interface CarouselImage {
  src: string;
  alt: string;
}

/**
 * Carrusel de imágenes con transición por opacidad, puntos de paginación
 * y avance automático. El avance sólo se activa en el navegador (no en SSR).
 * Si una imagen no existe se oculta y queda el degradado de fondo.
 */
@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCarouselComponent {
  readonly images = input.required<readonly CarouselImage[]>();
  /** Milisegundos entre slides. 0 desactiva el avance automático. */
  readonly interval = input<number>(6000);
  readonly showDots = input<boolean>(true);
  readonly showControls = input<boolean>(false);
  readonly ariaLabel = input<string>('Galería de imágenes');

  /** Índice activo; se puede enlazar con `[(activeIndex)]`. */
  readonly activeIndex = model<number>(0);

  private readonly failed = signal<ReadonlySet<string>>(new Set<string>());

  readonly count = computed(() => this.images().length);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (this.interval() <= 0 || this.count() <= 1) {
        return;
      }
      const timer = setInterval(() => this.next(), this.interval());
      destroyRef.onDestroy(() => clearInterval(timer));
    });
  }

  isBroken(src: string): boolean {
    return this.failed().has(src);
  }

  onImageError(src: string): void {
    this.failed.update((current) => new Set(current).add(src));
  }

  select(index: number): void {
    const total = this.count();
    if (total === 0) {
      return;
    }
    this.activeIndex.set(((index % total) + total) % total);
  }

  next(): void {
    this.select(this.activeIndex() + 1);
  }

  previous(): void {
    this.select(this.activeIndex() - 1);
  }
}
