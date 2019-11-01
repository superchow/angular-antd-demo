import { NgModule } from '@angular/core';
import { BytesToHtmlRoutingModule } from './bytes-to-html-routing.module';
import { BytesToHtmlComponent } from './bytes-to-html.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [BytesToHtmlRoutingModule, HttpClientModule],
  declarations: [BytesToHtmlComponent],
  exports: [BytesToHtmlComponent]
})
export class BytesToHtmlModule { }
