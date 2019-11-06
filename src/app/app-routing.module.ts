import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bytes-to-html' },
  {
    path: 'welcome',
    data: {
      title: 'welcome'
    },
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'bytes-to-html',
    data: {
      title: 'bytesToString'
    },
    loadChildren: () => import('./pages/bytes-to-html/bytes-to-html.module').then(m => m.BytesToHtmlModule)
  },
  {
    path: 'markdown',
    data: {
      title: 'markdown'
    },
    loadChildren: () => import('./pages/markdown/markdown.module').then(m => m.MarkdownUseModule)
  },
  {
    path: 'container-tpl',
    data: {
      title: 'container-tpl'
    },
    loadChildren: () => import('./pages/ng-container-tpl/ng-container-tpl.module').then(m => m.NgContainerTplModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
