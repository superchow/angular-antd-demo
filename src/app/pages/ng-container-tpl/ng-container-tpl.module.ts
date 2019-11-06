import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgContainerTplRoutingModule } from './ng-container-tpl-routing.module';
import { NgContainerTplComponent, CompleteComponent } from './ng-container-tpl.component';


@NgModule({
  declarations: [NgContainerTplComponent, CompleteComponent],
  imports: [
    CommonModule,
    NgContainerTplRoutingModule
  ],
  entryComponents: [CompleteComponent],
})
export class NgContainerTplModule { }
