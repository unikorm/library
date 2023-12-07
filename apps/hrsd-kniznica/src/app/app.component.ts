
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
@Component({
  standalone: true,
  imports: [RouterModule, MainComponent],
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
}
