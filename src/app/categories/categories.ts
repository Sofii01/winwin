import { Component } from '@angular/core';

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
export class CategoriesComponent {
  protected readonly categories = CATEGORIES;
  protected readonly pageDots = CATEGORIES.map((_, index) => index);
  protected activePage = 0;

  protected selectPage(index: number): void {
    this.activePage = index;
  }
}
