import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TortoiseComponent } from './tortoise.component';

describe('TortoiseComponent', () => {
  let component: TortoiseComponent;
  let fixture: ComponentFixture<TortoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TortoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TortoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
