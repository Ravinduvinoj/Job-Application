import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveApprovalComponent } from './remove-approval.component';

describe('RemoveApprovalComponent', () => {
  let component: RemoveApprovalComponent;
  let fixture: ComponentFixture<RemoveApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
