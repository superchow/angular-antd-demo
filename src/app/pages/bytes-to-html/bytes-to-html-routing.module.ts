import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BytesToHtmlComponent } from './bytes-to-html.component';

const routes: Routes = [
  { path: '', component: BytesToHtmlComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BytesToHtmlRoutingModule { }
