import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface NavLink {
  href: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected readonly links: readonly NavLink[] = [
    { href: '#proyectos', label: 'Sobre proyectos' },
    { href: '#como-funciona', label: 'Cómo funciona' },
    { href: '#nosotros', label: 'Nosotros' },
  ];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
