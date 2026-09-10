/** Tipo de colaboración que admite un proyecto. */
export type ProjectTag = 'Sustentable' | 'Inversión' | 'Donación' | 'Voluntariado';

/** Colecciones que alimentan las pestañas de la sección "Proyectos". */
export type ProjectCollection = 'favoritos' | 'recientes' | 'cercanos' | 'votados';

export interface Project {
  id: string;
  tag: ProjectTag;
  title: string;
  description: string;
  /** Ruta dentro de assets/images/projects. */
  image: string;
  /** Monto recaudado, en la moneda del proyecto. */
  raised: number;
  /** Meta de recaudación. */
  goal: number;
  investors: number;
  daysLeft: number;
  location: string;
  collections: ProjectCollection[];
}

/** Porcentaje recaudado, acotado a 0-100. */
export function projectProgress(project: Project): number {
  if (project.goal <= 0) {
    return 0;
  }
  return Math.min(100, Math.round((project.raised / project.goal) * 100));
}
