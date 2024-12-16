import { NgModule, Type } from '@angular/core';
import { BoxedTextComponent } from 'src/app/core/components/BoxedTextComponent';
import { RowComponent } from 'src/app/core/components/RowComponent';
import { CenterComponent } from 'src/app/core/components/CenterComponent';
import { ChartContainerComponent } from 'src/app/core/components/ChartContainerCompontent';
import { NavButtonComponent } from 'src/app/core/components/NavButtonComponent';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components: Array<Type<any>> = [
  BoxedTextComponent,
  RowComponent,
  CenterComponent,
  ChartContainerComponent,
  NavButtonComponent,
];

@NgModule({
  declarations: components,
  imports: [FontAwesomeModule],
  exports: components,
})
export class ComponentLibModule { }
