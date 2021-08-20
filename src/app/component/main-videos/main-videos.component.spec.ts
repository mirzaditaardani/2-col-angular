import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVideosComponent } from './main-videos.component';

describe('MainVideosComponent', () => {
  let component: MainVideosComponent;
  let fixture: ComponentFixture<MainVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
