import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDatatableComponent } from './case-datatable.component';

describe('CaseDatatableComponent', () => {
  let component: CaseDatatableComponent;
  let fixture: ComponentFixture<CaseDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
