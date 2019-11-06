import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerTplComponent } from './ng-container-tpl.component';

describe('NgContainerTplComponent', () => {
  let component: NgContainerTplComponent;
  let fixture: ComponentFixture<NgContainerTplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContainerTplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContainerTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
