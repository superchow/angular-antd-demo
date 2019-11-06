import { Component, OnInit } from '@angular/core';
import { routes } from '@/app/app-routing.module';
import { Routes } from '@angular/router';

export interface MenuRoute {
  path: string | any[];
  title: string;
}
export type MenuRoutes = MenuRoute[];

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  menuRoutes: MenuRoutes = routes
    .filter(route => route.path)
    .map(route => ({
      path: route.path,
      title: route.data ? route.data.title || '' : '',
    }));
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
    console.log(this.menuRoutes);
  }

}
