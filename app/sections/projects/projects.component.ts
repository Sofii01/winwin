import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { PROJECTS, PROJECT_TABS } from '../../data/projects.data';
import { ProjectCollection } from '../../models/project.model';

const PAGE_SIZE = 3;

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly tabs = PROJECT_TABS;

  protected readonly activeTab = signal<ProjectCollection>('favoritos');
  protected readonly page = signal(0);

  /** Proyectos de la pestaña activa. */
  protected readonly filtered = computed(() =>
    PROJECTS.filter((project) => project.collections.includes(this.activeTab())),
  );

  protected readonly pageCount = computed(() =>
    Math.max(1, Math.ceil(this.filtered().length / PAGE_SIZE)),
  );

  /** Índices de página, para los puntos de paginación. */
  protected readonly pages = computed(() =>
    Array.from({ length: this.pageCount() }, (_, index) => index),
  );

  /** Los proyectos visibles en la página actual. */
  protected readonly visible = computed(() => {
    const start = this.page() * PAGE_SIZE;
    return this.filtered().slice(start, start + PAGE_SIZE);
  });

  protected selectTab(tab: ProjectCollection): void {
    this.activeTab.set(tab);
    this.page.set(0);
  }

  protected selectPage(index: number): void {
    this.page.set(index);
  }
}
