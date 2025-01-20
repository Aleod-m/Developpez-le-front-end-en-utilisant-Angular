import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

/**
 * Component for navigating back to home page.
 */
@Component({
  selector: 'NavButton',
  template: `
    <button (click)="onClick()">
      <fa-icon [icon]="faHouse"></fa-icon>
    </button>
  `,
  styles: `
    :host {
      align-self: center;
    }
    button {
      aspect-ratio: 1;
      padding: 1rem 1rem;
      border-radius: .5rem;
      border: none;
      background-color: #04838f;
      color: white;
      display: grid;
      place-items: center;
      gap: 5px;
      cursor: pointer;
      &:hover {
        background-color: #06c4d6;
      }
    }
  `,
})
export class NavButtonComponent {
  faHouse = faHouse;

  constructor(private router: Router) { }

  // Navigate to the home route.
  onClick(): void {
    this.router.navigate(["home"]);
  }
}
