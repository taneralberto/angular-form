import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonLayoutComponent } from './core/layout/containers/common-layout/common-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-form');
}
