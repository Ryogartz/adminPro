import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadscrumsComponent } from './breadscrums.component';

describe('BreadscrumsComponent', () => {
  let component: BreadscrumsComponent;
  let fixture: ComponentFixture<BreadscrumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadscrumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadscrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
