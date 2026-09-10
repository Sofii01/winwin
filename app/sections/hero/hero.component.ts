import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  CarouselImage,
  ImageCarouselComponent,
} from '../../components/image-carousel/image-carousel.component';

@Component({
  selector: 'app-hero',
  imports: [ImageCarouselComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly images: readonly CarouselImage[] = [
    {
      src: 'assets/images/hero/hero-comunidad.jpg',
      alt: 'Personas de una comunidad trabajando juntas en un proyecto',
    },
    {
      src: 'assets/images/hero/hero-huerta.jpg',
      alt: 'Voluntarios cuidando una huerta comunitaria',
    },
    {
      src: 'assets/images/hero/hero-taller.jpg',
      alt: 'Taller de emprendedoras en Latinoamérica',
    },
  ];
}
