import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarActivityComponent } from './side-bar-activity.component';

describe('SideBarActivityComponent', () => {
  let component: SideBarActivityComponent;
  let fixture: ComponentFixture<SideBarActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
