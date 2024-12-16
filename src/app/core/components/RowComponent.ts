import { Component, Input } from '@angular/core';

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
      width: fit-conent;
    }
  `,
})
export class RowComponent {
  @Input() gap: string = "10px";
}

