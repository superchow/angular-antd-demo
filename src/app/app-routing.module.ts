import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bytes-to-html' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'bytes-to-html', loadChildren: () => import('./pages/bytes-to-html/bytes-to-html.module').then(m => m.BytesToHtmlModule) },
  { path: 'markdown', loadChildren: () => import('./pages/markdown/markdown.module').then(m => m.MarkdownUseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
