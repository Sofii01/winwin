import { Category } from '../models/category.model';

export const CATEGORIES: readonly Category[] = [
  {
    id: 'ambiental',
    eyebrow: 'Categorías de WinWin Dream',
    name: 'Ambiental',
    description:
      'Proyectos que cuidan el planeta desde lo local: reciclaje, energías limpias, espacios verdes y consumo responsable.',
    image: 'assets/images/categories/ambiental.jpg',
  },
  {
    id: 'social',
    eyebrow: 'Categorías de WinWin Dream',
    name: 'Social',
    description:
      'Iniciativas que fortalecen el tejido comunitario: comedores, centros de apoyo escolar y redes de cuidado.',
    image: 'assets/images/categories/social.jpg',
  },
  {
    id: 'educativo',
    eyebrow: 'Categorías de WinWin Dream',
    name: 'Educativo',
    description:
      'Formación, becas y herramientas que amplían las oportunidades de aprendizaje en toda Latinoamérica.',
    image: 'assets/images/categories/educativo.jpg',
  },
  {
    id: 'cultural',
    eyebrow: 'Categorías de WinWin Dream',
    name: 'Cultural',
    description:
      'Arte, memoria e identidad: proyectos que dan voz a las expresiones culturales de cada territorio.',
    image: 'assets/images/categories/cultural.jpg',
  },
  {
    id: 'emprendedor',
    eyebrow: 'Categorías de WinWin Dream',
    name: 'Emprendedor',
    description:
      'Pequeños negocios con impacto que necesitan capital, mentoría y comunidad para dar el siguiente paso.',
    image: 'assets/images/categories/emprendedor.jpg',
  },
];
