import { Component } from '@angular/core';

@Component({
  selector: 'ChartContainer',
  template: `
    <div>
      <ng-content/>
    </div>
  `,
  styles: `div {
    width: 100%;
    height: 100%;
  }`,
})
export class ChartContainerComponent { }
