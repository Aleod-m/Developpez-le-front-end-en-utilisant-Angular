import { Component, Input } from '@angular/core';

/**
 * Layout component for putting its content in a row.
 */
@Component({
  selector: 'Row',
  template: `
    <div
      [style.gap]="gap"
    >
      <ng-content/>
    </div>
  `,
  styles: `
    div {
      display: flex;
      flex-direction: row;
    }
  `,
})
export class RowComponent {
  /** Gap between all the elements.*/
  @Input() gap: string = "10px";
}

