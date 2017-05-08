import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyercasedateComponent } from './lawyercasedate.component';

describe('LawyercasedateComponent', () => {
  let component: LawyercasedateComponent;
  let fixture: ComponentFixture<LawyercasedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyercasedateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyercasedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
