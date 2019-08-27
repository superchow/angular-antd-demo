import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const COMPONENTS = [LayoutComponent];

@NgModule({
  imports: [NgZorroAntdModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class LayoutModule {

}
