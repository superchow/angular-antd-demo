import { Component, OnInit } from '@angular/core';
import { routes } from '@/app/app-routing.module';
import { Routes } from '@angular/router';

export interface MenuRoute {
  path: string | any[];
  title: string;
}
export type MenuRoutes = MenuRoute[];

/**
 * Angular组件化除了自定义标签，还可以在selector元数据里配置样式、属性的调用方式。selector总共有6种配置方式：
 * selector: 'element-name'//自定义标签选择器
 * selector: '.class'//样式选择器
 * selector: '[attribute]'//属性选择器
 * selector: '[attribute=value]'//属性值选择器
 * selector: ':not(sub_selector)'//取反选择器
 * selector: 'selector1, selector2'//多种选择器
 */
@Component({
  selector: 'layout,[layout]',
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
