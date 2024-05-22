import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBoxComponent } from './pending-box.component';

describe('PendingBoxComponent', () => {
  let component: PendingBoxComponent;
  let fixture: ComponentFixture<PendingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
