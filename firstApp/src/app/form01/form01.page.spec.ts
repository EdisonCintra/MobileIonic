import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { Form01Page } from './form01.page';

describe('Form01Page', () => {
  let component: Form01Page;
  let fixture: ComponentFixture<Form01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Form01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
