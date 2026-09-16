import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionTitleComponent } from '../shared/section-title/section-title';
import { HOW_IT_WORKS_STEPS } from '../shared/how-it-works/how-it-works.data';

@Component({
  selector: 'app-how-it-works',
  imports: [SectionTitleComponent],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorksComponent {
  protected readonly steps = HOW_IT_WORKS_STEPS;
}
