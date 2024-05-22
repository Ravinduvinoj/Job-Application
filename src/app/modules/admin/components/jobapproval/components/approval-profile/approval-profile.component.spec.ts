import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalProfileComponent } from './approval-profile.component';

describe('ApprovalProfileComponent', () => {
  let component: ApprovalProfileComponent;
  let fixture: ComponentFixture<ApprovalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
