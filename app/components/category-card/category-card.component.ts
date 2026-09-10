import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';

import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCardComponent {
  readonly category = input.required<Category>();

  protected readonly imageOk = signal(true);

  constructor() {
    effect(() => {
      this.category();
      this.imageOk.set(true);
    });
  }

  protected onImageError(): void {
    this.imageOk.set(false);
  }
}
