import { NgModule, Type } from '@angular/core';
import { BoxedTextComponent } from 'src/app/core/components/BoxedTextComponent';
import { RowComponent } from 'src/app/core/components/RowComponent';
import { CenterComponent } from 'src/app/core/components/CenterComponent';
import { NavButtonComponent } from 'src/app/core/components/NavButtonComponent';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components: Array<Type<unknown>> = [
  BoxedTextComponent,
  RowComponent,
  CenterComponent,
  NavButtonComponent,
];

/*
 * Module containing a library of custom components.
 */
@NgModule({
  declarations: components,
  imports: [FontAwesomeModule],
  exports: components,
})
export class ComponentLibModule { }
