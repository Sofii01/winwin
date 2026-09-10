import { Project } from '../models/project.model';

/** Pestañas de la sección de proyectos. */
export interface ProjectTab {
  id: Project['collections'][number];
  label: string;
}

export const PROJECT_TABS: readonly ProjectTab[] = [
  { id: 'favoritos', label: 'Favoritos de Win Win' },
  { id: 'recientes', label: 'Recién publicados' },
  { id: 'cercanos', label: 'Cerca de tu zona' },
  { id: 'votados', label: 'Más votados' },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    id: 'compostaje-arequipa',
    tag: 'Sustentable',
    title: 'Compostaje comunitario de baños',
    description:
      'La comunidad Wichi del norte de Arequipa (Perú) no cuenta con instalaciones de baños para sus necesidades básicas.',
    image: 'assets/images/projects/compostaje-arequipa.jpg',
    raised: 912018,
    goal: 1100000,
    investors: 214,
    daysLeft: 12,
    location: 'Arequipa, Perú',
    collections: ['favoritos', 'votados'],
  },
  {
    id: 'huerta-escolar',
    tag: 'Inversión',
    title: 'Huerta escolar agroecológica',
    description:
      'Estudiantes de una escuela rural de Salta cultivan sus propios alimentos y aprenden agroecología en el patio.',
    image: 'assets/images/projects/huerta-escolar.jpg',
    raised: 640500,
    goal: 900000,
    investors: 158,
    daysLeft: 25,
    location: 'Salta, Argentina',
    collections: ['favoritos', 'recientes'],
  },
  {
    id: 'agua-seguraf',
    tag: 'Donación',
    title: 'Agua segura para el barrio San José',
    description:
      'Instalación de filtros comunitarios que garantizan agua potable a más de 300 familias durante todo el año.',
    image: 'assets/images/projects/agua-segura.jpg',
    raised: 388900,
    goal: 500000,
    investors: 96,
    daysLeft: 8,
    location: 'Cochabamba, Bolivia',
    collections: ['favoritos', 'cercanos', 'votados'],
  },
  {
    id: 'taller-textil',
    tag: 'Inversión',
    title: 'Taller textil cooperativo',
    description:
      'Doce mujeres emprendedoras equipan un taller de confección con maquinaria propia y venta directa.',
    image: 'assets/images/projects/taller-textil.jpg',
    raised: 210000,
    goal: 750000,
    investors: 61,
    daysLeft: 34,
    location: 'Medellín, Colombia',
    collections: ['recientes', 'cercanos'],
  },
  {
    id: 'biblioteca-movil',
    tag: 'Voluntariado',
    title: 'Biblioteca móvil rural',
    description:
      'Una camioneta acondicionada lleva libros y talleres de lectura a diez parajes sin acceso a bibliotecas.',
    image: 'assets/images/projects/biblioteca-movil.jpg',
    raised: 145300,
    goal: 400000,
    investors: 73,
    daysLeft: 41,
    location: 'Maldonado, Uruguay',
    collections: ['recientes', 'favoritos'],
  },
  {
    id: 'energia-solar',
    tag: 'Sustentable',
    title: 'Energía solar para la sala médica',
    description:
      'Paneles solares que permiten mantener la cadena de frío de vacunas en una sala de atención primaria.',
    image: 'assets/images/projects/energia-solar.jpg',
    raised: 1020400,
    goal: 1200000,
    investors: 302,
    daysLeft: 6,
    location: 'Chiapas, México',
    collections: ['votados', 'cercanos'],
  },
];
