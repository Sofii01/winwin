import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FooterColumn {
  title: string;
  links: { href: string; label: string }[];
}

type SocialIcon = 'instagram' | 'linkedin' | 'email';

interface FooterSocial {
  href: string;
  label: string;
  icon: SocialIcon;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();

  protected readonly columns: readonly FooterColumn[] = [
    {
      title: 'Secciones',
      links: [
        { href: '#proyectos', label: 'Explorar oportunidades' },
        { href: '#contacto', label: 'Compartir mi idea' },
        { href: '#como-funciona', label: 'Cómo funciona' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { href: '#nosotros', label: 'Sobre nosotros' },
        { href: '#valores', label: 'Valores' },
        { href: '#contacto', label: 'Contacto' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '#legal', label: 'Aviso legal' },
        { href: '#legal', label: 'Política de Privacidad' },
        { href: '#legal', label: 'Política de cookies' },
      ],
    },
  ];

  protected readonly socials: readonly FooterSocial[] = [
    { href: '#', label: 'Instagram', icon: 'instagram' },
    { href: '#', label: 'LinkedIn', icon: 'linkedin' },
    { href: '#', label: 'Escribinos por correo', icon: 'email' },
  ];
}
