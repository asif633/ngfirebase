import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyercaseComponent } from './lawyercase.component';

describe('LawyercaseComponent', () => {
  let component: LawyercaseComponent;
  let fixture: ComponentFixture<LawyercaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyercaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
