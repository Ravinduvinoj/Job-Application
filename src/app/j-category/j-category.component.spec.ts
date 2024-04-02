import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JCategoryComponent } from './j-category.component';

describe('JCategoryComponent', () => {
  let component: JCategoryComponent;
  let fixture: ComponentFixture<JCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
