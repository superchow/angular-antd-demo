import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  AfterViewInit,
  ViewContainerRef,
  Injectable,
  Injector,
} from '@angular/core';

@Injectable()
export class Greeter {
  suffix = '!';
}

@Component({
  selector: 'complete-component',
  template: `
    Complete: <ng-content></ng-content>，<ng-content></ng-content>{{ greeter.suffix }}
  `,
})
export class CompleteComponent {
  constructor(public greeter: Greeter) {}
}

@Component({
  selector: 'container-tpl',
  templateUrl: './ng-container-tpl.component.html',
  styleUrls: ['./ng-container-tpl.component.less'],
})
export class NgContainerTplComponent implements OnInit, AfterViewInit {
  myInjector: Injector;
  CompleteComponent = CompleteComponent;
  myContent = [[document.createTextNode('第一个值')], [document.createTextNode('第二个值')]];
  @ViewChild(CompleteComponent, { static: true }) completeComponent: CompleteComponent;
  // TemplateRef 与 ViewContainerRef 相关链接：https://segmentfault.com/a/1190000009099653#articleHeader51
  myContext = { $implicit: '默认值', localSk: '选择的key-value' };
  @ViewChild('greet', { static: false }) greetTplRef: TemplateRef<any>;
  @ViewChild('eng', { static: true }) engTplRef: TemplateRef<any>;
  @ViewChild('svk', { read: ViewContainerRef, static: false }) svkTplRef: ViewContainerRef;

  constructor(injector: Injector) {
    this.myInjector = Injector.create({ providers: [{ provide: Greeter, deps: [] }], parent: injector });
  }

  ngOnInit() {}
  ngAfterViewInit() {
    const { greetTplRef, engTplRef, svkTplRef, completeComponent } = this;
    // `@ViewChild` 拿不到`entryComponents`动态载入的组件，除非再template模板中定义了
    console.info(completeComponent);
    // `@ViewChild` 中的 `static` 属性，如果为True，则在运行更改检测之前解析查询结果
    console.log(greetTplRef, engTplRef, svkTplRef);
  }
}
