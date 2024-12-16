import { Component } from '@angular/core';

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
