import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bytesToHtml',
  templateUrl: './bytes-to-html.component.html',
  styleUrls: ['./bytes-to-html.component.less'],
})
export class BytesToHtmlComponent implements OnInit {
  bytesHtml: string;
  byteStr: string;
  constructor(public http: HttpClient) {
    window[`bytesToHtmlComponent`] = this;
  }

  ngOnInit() {
    this.http
      .get('/assets/bytes.txt', {
        responseType: 'text',
      })
      .toPromise()
      .then(txt => {
        this.byteStr = txt;
        this.bytesHtml = this.b64DecodeUnicode(txt);
      });
    // this.http.get('/assets/bytes.html', {
    //   responseType: 'blob'
    // }).toPromise()
    // .then(blob => {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(blob);
    //   // tslint:disable-next-line:only-arrow-functions
    //   reader.onloadend = function() {
    //     console.log(reader.result);
    //   };
    // });
  }

  arrayBufferToString(arrBytes: ArrayBuffer): Promise<string> {
    return new Promise(resolve => {
      // let files = new window.File([this.blob], file.name, {type: file.type})
      const blob = new Blob([arrBytes], { type: 'text/html' });
      const reader = new FileReader();
      reader.readAsText(blob, 'utf-8');
      // tslint:disable-next-line:only-arrow-functions
      reader.onloadend = function() {
        resolve(reader.result as string);
      };
    });
  }
  b64DecodeUnicode(str: string) {
    return decodeURIComponent(
      atob(str)
        .split('')
        .map(c => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }
  // byteToString(arr: any) {
  //   if (typeof arr === 'string') {
  //     return arr;
  //   }
  //   let str = '';
  //   const Arr = arr;
  //   for (let i = 0; i < Arr.length; i++) {
  //     const one = Arr[i].toString(2),
  //         v = one.match(/^1+?(?=0)/);
  //     if (v && one.length === 8) {
  //         const bytesLength = v[0].length;
  //         let store = Arr[i].toString(2).slice(7 - bytesLength);
  //         for (let st = 1; st < bytesLength; st++) {
  //             store += Arr[st + i].toString(2).slice(2);
  //         }
  //         str += String.fromCharCode(parseInt(store, 2));
  //         i += bytesLength - 1;
  //     } else {
  //         str += String.fromCharCode(Arr[i]);
  //     }
  //   }
  //   return str;
  // }
}
