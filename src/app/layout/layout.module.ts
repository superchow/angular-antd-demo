import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

const COMPONENTS = [LayoutComponent];

@NgModule({
  imports: [RouterModule, NgZorroAntdModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class LayoutModule {

}
