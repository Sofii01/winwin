import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

import { Project, projectProgress } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [DecimalPipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();

  protected readonly imageOk = signal(true);

  protected readonly progress = computed(() => projectProgress(this.project()));

  protected onImageError(): void {
    this.imageOk.set(false);
  }
}
