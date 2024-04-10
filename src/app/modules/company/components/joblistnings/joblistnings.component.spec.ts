import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblistningsComponent } from './joblistnings.component';

describe('JoblistningsComponent', () => {
  let component: JoblistningsComponent;
  let fixture: ComponentFixture<JoblistningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoblistningsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoblistningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
