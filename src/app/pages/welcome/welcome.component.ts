import { Component, OnInit } from '@angular/core';
import { JSEncrypt } from 'jsencrypt';

// tslint:disable-next-line:max-line-length
const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw4NENb1dgNLgGiYgjKvuv3N55SDGgckNiaTZ09d7rWb3BVy/6H2SiBtBx486sPKIR4Xl2Az0C6Qf2TXlg5bL0xJslRiWl7HOk3eu/e0jgXJycgwxgQSLNE7Of2EeTaDvfnYVCQCw5xRa0YchImBdUdi88odXMFDY1tsXP+o/LsyUvRKdhQWP8WRKnvx1/maIvqz0BED7y2rdb/PbQ1FAnmBRmRRmAtJgrCBx7wArRCL5ymA0SXO7hHiZpoYJofPfnuU41FoSaNAqp/9iVI1Z7PwGDuvQDqcGtmv83xM5K/nDJsVv4DhQFynROw9ETzb5pkJkiO5dahkeycKzvy5E6QIDAQAB';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  public rsa: string;
  constructor() { }

  ngOnInit() {
    // 新建JSEncrypt对象
    const encryptor = new JSEncrypt({
      default_key_size: 1024
     });
    // 设置公钥
    encryptor.setPublicKey(publicKey);
    // 加密数据
    this.rsa = encryptor.encrypt('a123456');
  }

}
