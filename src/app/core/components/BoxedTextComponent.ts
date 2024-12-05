import { Component, Input } from '@angular/core';

@Component({
  selector: 'BoxedText',
  template: `
    <p
      [style.color]="text_color"
      [style.border-color]="border_color"
      [style.background-color]="background_color"
    >
      <ng-content/>
    </p>
  `,
  styles: `
    p {
      text-align: center;
      padding: 1rem 1.5rem;
      border-width: 1px;
      border-style: solid;
      border-radius: .3rem;
    }
  `,
})
export class BoxedTextComponent {
  @Input() text_color: string = "black";
  @Input() border_color: string = "green";
  @Input() background_color: string = "white";
}

