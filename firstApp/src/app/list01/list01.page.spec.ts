import { ComponentFixture, TestBed } from '@angular/core/testing';
import { List01Page } from './list01.page';

describe('List01Page', () => {
  let component: List01Page;
  let fixture: ComponentFixture<List01Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(List01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
