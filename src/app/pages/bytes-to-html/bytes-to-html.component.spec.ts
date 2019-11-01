import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BytesToHtmlComponent } from './bytes-to-html.component';

describe('BytesToHtmlComponent', () => {
  let component: BytesToHtmlComponent;
  let fixture: ComponentFixture<BytesToHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BytesToHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BytesToHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
