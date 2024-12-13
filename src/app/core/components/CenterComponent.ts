import { Component, Input } from '@angular/core';

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
      place-content: center;
    }
  `,
})
export class CenterComponent { }
