import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../../components/header/header.component';
import { FooterLayoutComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-common-layout',
  imports: [HeaderLayoutComponent, FooterLayoutComponent],
  template: `
    <div class="common-layout">
      <app-header-layout></app-header-layout>

      <ng-content></ng-content>

      <app-footer-layout></app-footer-layout>
    </div>
  `,
})
export class CommonLayoutComponent {}
