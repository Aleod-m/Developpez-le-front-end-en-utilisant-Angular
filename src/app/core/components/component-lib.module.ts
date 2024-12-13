import { NgModule } from '@angular/core';
import { BoxedTextComponent } from 'src/app/core/components/BoxedTextComponent';
import { RowComponent } from 'src/app/core/components/RowComponent';
import { CenterComponent } from 'src/app/core/components/CenterComponent';

@NgModule({
  declarations: [
    BoxedTextComponent,
    RowComponent,
    CenterComponent,
  ],
  exports: [
    BoxedTextComponent,
    RowComponent,
    CenterComponent,
  ],
})
export class ComponentLibModule {}
