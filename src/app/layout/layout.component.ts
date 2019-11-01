import { Component, OnInit } from '@angular/core';
import { routes } from '@/app/app-routing.module';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
    console.log(routes);
  }

}
