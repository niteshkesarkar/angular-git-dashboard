import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenIssuesComponent } from './open-issues.component';

describe('OpenIssuesComponent', () => {
  let component: OpenIssuesComponent;
  let fixture: ComponentFixture<OpenIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
