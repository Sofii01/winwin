import { Component } from '@angular/core';

interface Value {
  title: string;
  description: string;
  icon: string;
}

const VALUES: Value[] = [
  {
    title: 'Conexión',
    description: 'Facilitamos vínculos significativos entre creadores, inversionistas y comunidades.',
    icon: 'assests/connection.png',
  },
  {
    title: 'Confianza y Transparencia',
    description: 'Información clara, seguimiento en tiempo real y procesos seguros.',
    icon: 'assests/confianza.png',
  },
  {
    title: 'Innovación y Creatividad',
    description: 'Apoyamos ideas únicas y proyectos que sean disruptivos.',
    icon: 'assests/innovacion.png',
  },
  {
    title: 'Impacto positivo',
    description:
      'Priorizamos proyectos que generen beneficios sociales, ambientales o culturales en Latinoamérica.',
    icon: 'assests/impacto positivo.png',
  },
  {
    title: 'Colaboración',
    description:
      'Al éxito lo conseguimos trabajando juntos: comunidad, inversores, voluntarios y creadores.',
    icon: 'assests/colaboracion.png',
  },
  {
    title: 'Accesibilidad',
    description: 'Democratizamos la inversión, permitiendo que todos puedan participar.',
    icon: 'assests/accesibilidad.png',
  },
];

const PEOPLE_ROW = Array.from({ length: 14 }, (_, index) => index);

@Component({
  selector: 'app-values',
  templateUrl: './values.html',
  styleUrl: './values.css',
})
export class ValuesComponent {
  protected readonly values = VALUES;
  protected readonly peopleRow = PEOPLE_ROW;
}
