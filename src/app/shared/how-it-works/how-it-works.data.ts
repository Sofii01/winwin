export interface HowItWorksStep {
  id: string;
  step: number;
  icon: 'idea' | 'comunidad' | 'impacto';
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: readonly HowItWorksStep[] = [
  {
    id: 'idea',
    step: 1,
    icon: 'idea',
    title: 'Compartí tu idea',
    description: 'Contanos tu proyecto y qué necesitás para hacerlo realidad.',
  },
  {
    id: 'comunidad',
    step: 2,
    icon: 'comunidad',
    title: 'Sumá a la comunidad',
    description: 'Conectate con personas y colaboradores que apoyan tu propuesta.',
  },
  {
    id: 'impacto',
    step: 3,
    icon: 'impacto',
    title: 'Generá impacto',
    description: 'Recibí apoyo e inversión para que tu proyecto crezca con resultados reales.',
  },
];
