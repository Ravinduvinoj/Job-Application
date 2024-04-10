import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapprovalComponent } from './jobapproval.component';

describe('JobapprovalComponent', () => {
  let component: JobapprovalComponent;
  let fixture: ComponentFixture<JobapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobapprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
