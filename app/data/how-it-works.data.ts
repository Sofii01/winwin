/** Icono que acompaña al número del paso. */
export type HowItWorksIcon = 'idea' | 'comunidad' | 'impacto';

export interface HowItWorksStep {
  id: string;
  /** Número visible del paso. */
  step: number;
  icon: HowItWorksIcon;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: readonly HowItWorksStep[] = [
  {
    id: 'descubri',
    step: 1,
    icon: 'idea',
    title: 'Descubrí o compartí una idea',
    description: 'Explorá oportunidades activas o publicá tu propio proyecto de impacto.',
  },
  {
    id: 'conecta',
    step: 2,
    icon: 'comunidad',
    title: 'Conectá con la comunidad',
    description: 'Facilitamos vínculos entre creadores, colaboradores y comunidades.',
  },
  {
    id: 'segui',
    step: 3,
    icon: 'impacto',
    title: 'Seguí el impacto en tiempo real',
    description: 'Información clara y seguimiento en tiempo real en cada colaboración.',
  },
];
