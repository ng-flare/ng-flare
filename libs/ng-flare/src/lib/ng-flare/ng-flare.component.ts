import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fl-ng-flare',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-flare.component.html',
  styleUrl: './ng-flare.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgFlareComponent {}
