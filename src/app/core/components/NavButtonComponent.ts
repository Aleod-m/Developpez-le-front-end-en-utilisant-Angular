import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'NavButton',
  template: `
    <button (click)="onClick()">
      <fa-icon [icon]="faArrowLeft"></fa-icon>
      <fa-icon [icon]="faHouse"></fa-icon>
    </button>
  `,
  styles: `
    div {
      width: 100%;
      height: 100%;
    }
  `,
})
export class NavButtonComponent {
  faArrowLeft = faArrowLeft;
  faHouse = faHouse;

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate(["home"]);
  }
}
