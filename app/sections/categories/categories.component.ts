import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { CATEGORIES } from '../../data/categories.data';

@Component({
  selector: 'app-categories',
  imports: [CategoryCardComponent, SectionTitleComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  protected readonly categories = CATEGORIES;

  protected readonly activeIndex = signal(0);

  protected readonly active = computed(() => this.categories[this.activeIndex()]);

  protected select(index: number): void {
    this.activeIndex.set(index);
  }
}
