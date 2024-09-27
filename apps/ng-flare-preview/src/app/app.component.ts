import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFlareComponent } from '@ng-flare/ng-flare';

@Component({
  standalone: true,
  imports: [RouterModule, NgFlareComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-flare-preview';
}
