import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListningsComponent } from './view-listnings.component';

describe('ViewListningsComponent', () => {
  let component: ViewListningsComponent;
  let fixture: ComponentFixture<ViewListningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewListningsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewListningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
