import { Component } from '@angular/core';

/**
 * Layout Component centering its content.
 */
@Component({
  selector: 'Center',
  template: `
    <div>
      <ng-content/>
    </div>
  `,
  styles: `
    div {
      display: grid;
      place-items: center;
      height: max-content;
    }
  `,
})
export class CenterComponent { }
