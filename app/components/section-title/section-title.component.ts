import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type SectionTitleAlign = 'left' | 'center' | 'right';

/**
 * Encabezado compartido por las secciones: volanta + título + bajada.
 * El color se hereda del contenedor mediante las variables CSS
 * `--section-title-color` y `--section-text-color`.
 */
@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"section-title section-title--" + align()',
  },
})
export class SectionTitleComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly align = input<SectionTitleAlign>('center');
  /** Volanta clara para fondos oscuros. */
  readonly light = input<boolean>(false);
}
