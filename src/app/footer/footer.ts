import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  path: string;
  fragment?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: 'Secciones',
    links: [
      { label: 'Explorar oportunidades', path: '/', fragment: 'proyectos' },
      { label: 'Compartir mi idea', path: '/', fragment: 'contacto' },
      { label: 'Cómo funciona', path: '/', fragment: 'como-funciona' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nosotros', path: '/', fragment: 'nosotros' },
      { label: 'Valores', path: '/', fragment: 'valores' },
      { label: 'Contacto', path: '/', fragment: 'contacto' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Aviso legal', path: '/terminos-y-condiciones' },
      { label: 'Política de Privacidad', path: '/politica-de-privacidad' },
      { label: 'Política de cookies', path: '/politica-de-privacidad' },
    ],
  },
];

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly columns = COLUMNS;
}
