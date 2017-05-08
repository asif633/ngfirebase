import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyercaseDatatableComponent } from './lawyercase-datatable.component';

describe('LawyercaseDatatableComponent', () => {
  let component: LawyercaseDatatableComponent;
  let fixture: ComponentFixture<LawyercaseDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyercaseDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyercaseDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
