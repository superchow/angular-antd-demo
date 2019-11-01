import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.less']
})
export class MarkdownComponent implements OnInit {
  remark: string;
  constructor() { }

  ngOnInit() {
  }

}
