import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgContainerTplComponent } from './ng-container-tpl.component';


const routes: Routes = [
  { path: '', component: NgContainerTplComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContainerTplRoutingModule { }
