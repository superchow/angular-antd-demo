import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const COMPONENTS = [LayoutComponent];

@NgModule({
  imports: [CommonModule, RouterModule, NgZorroAntdModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class LayoutModule {

}
