import { Component, Input } from '@angular/core';

/**
 * Component creating boxed text with configurable styles.
 */
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
      border-width: 2px;
      border-style: solid;
      border-radius: .5rem;
    }
  `,
})
export class BoxedTextComponent {
  /** Color of the text. */
  @Input() text_color: string = "black";
  /** Color of the border. */
  @Input() border_color: string = "green";
  /** Color of the background. */
  @Input() background_color: string = "white";
}
