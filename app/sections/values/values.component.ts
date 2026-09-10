import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { VALUES } from '../../data/values.data';

@Component({
  selector: 'app-values',
  imports: [SectionTitleComponent],
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValuesComponent {

  protected readonly values = VALUES;

  protected readonly peopleTop = Array(16).fill(0);

}