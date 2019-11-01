import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { MarkdownRoutingModule } from './markdown-routing.module';
import { MarkdownComponent } from './markdown.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MarkdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    MarkdownRoutingModule,
    NgZorroAntdModule,
    MarkdownModule.forRoot(),
  ],
  exports: [MarkdownComponent]
})
export class MarkdownUseModule { }
