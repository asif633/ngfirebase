import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyercaseContainerComponent } from './lawyercase-container.component';

describe('LawyercaseContainerComponent', () => {
  let component: LawyercaseContainerComponent;
  let fixture: ComponentFixture<LawyercaseContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyercaseContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyercaseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
