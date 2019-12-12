import { Component, OnInit, ElementRef } from '@angular/core';
import { NzCopyToClipboardService, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.less'],
})
export class MarkdownComponent implements OnInit {
  remarkHead: string = '';
  remarkBody: string = '';
  public get remark(): string {
    const breakStr = '\n\t\r';
    const { remarkHead, remarkBody } = this;
    return `
      ${breakStr}${remarkHead}${breakStr}\n
      ${breakStr}${remarkBody}`;
  }

  constructor(
    private elementRef: ElementRef,
    private copyToClipboard: NzCopyToClipboardService,
    private message: NzMessageService
  ) {
    window[`MarkdownComponent`] = this;
  }

  ngOnInit() {
    // DOMSubtreeModified MutationObserver 均会再次触发（handleEdited会有计算）
    // const callback = function(mutations: MutationRecord[], observer: MutationObserver) {
    //   console.log(`MutationObserver: ${mutations}`);
    //   console.log(mutations);
    // };
    // const mObserver  = new MutationObserver(callback);
    // mObserver.observe(tableRef.nativeElement, {
    //   attributeFilter: ['class'],
    //   attributeOldValue: true,
    //   attributes: true,
    //   characterData: true,
    //   characterDataOldValue: true,
    //   childList: true,
    //   subtree: true,
    // });
    // const domObservable = fromEvent(tableRef.nativeElement, 'DOMSubtreeModified');
    // domObservable
    //   .pipe(debounceTime(1000))
    //   .subscribe((e) => {
    //     console.log(`domObservable: ${e}`);
    //     console.log(e);
    //   });
    // const editObservable = fromEvent(tableRef.nativeElement, 'keyup');
    // this.editedEventSubscription = editObservable
    //   .pipe(debounceTime(1000))
    //   .subscribe((e) => {
    //     this.handleEdited(e);
    //   });
  }

  async copyMarkdownHtml() {
    const markdownContainer = this.elementRef.nativeElement.querySelector('#markdownContainer');
    // markdownContainer.select();
    // document.execCommand('Copy', false, null);
    const htmlText = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>TEST</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
      <body style="margin: 0; padding: 0;">
      ${markdownContainer.innerHTML}
      </body>
    </html>`;
    const result = await this.copyToClipboard.copy(htmlText);
    if (result) {
      this.message.success('复制成功！');
    } else {
      this.message.error('复制失败！');
    }
  }
}
