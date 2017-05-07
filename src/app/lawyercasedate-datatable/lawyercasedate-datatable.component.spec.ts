import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyercasedateDatatableComponent } from './lawyercasedate-datatable.component';

describe('LawyercasedateDatatableComponent', () => {
  let component: LawyercasedateDatatableComponent;
  let fixture: ComponentFixture<LawyercasedateDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyercasedateDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyercasedateDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
