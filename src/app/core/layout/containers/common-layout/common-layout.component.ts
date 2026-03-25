import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../../components/header/header.component';
import { FooterLayoutComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-common-layout',
  imports: [HeaderLayoutComponent, FooterLayoutComponent],
  template: `
    <div class="d-flex flex-column min-vh-100">
      <app-header-layout></app-header-layout>
      <main class="flex-grow-1">
        <ng-content></ng-content>
      </main>
      <app-footer-layout></app-footer-layout>
    </div>
  `,
})
export class CommonLayoutComponent {}
