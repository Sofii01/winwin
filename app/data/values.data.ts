export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

export const VALUES: readonly ValueItem[] = [
  {
    id: 'conexion',
    title: 'Conexión',
    description:
      'Facilitamos vínculos significativos entre creadores, inversionistas y comunidades.',
  },
  {
    id: 'confianza',
    title: 'Confianza y Transparencia',
    description: 'Información clara, seguimiento en tiempo real y procesos seguros.',
  },
  {
    id: 'innovacion',
    title: 'Innovación y Creatividad',
    description: 'Apoyamos ideas únicas y proyectos que sean disruptivos.',
  },
  {
    id: 'impacto',
    title: 'Impacto positivo',
    description:
      'Priorizamos proyectos que generen beneficios sociales, ambientales o culturales en Latinoamérica.',
  },
  {
    id: 'colaboracion',
    title: 'Colaboración',
    description:
      'Al éxito lo conseguimos trabajando juntos: comunidad, inversores, voluntarios y creadores.',
  },
  {
    id: 'accesibilidad',
    title: 'Accesibilidad',
    description: 'Democratizamos la inversión, permitiendo que todos puedan participar.',
  },
];
