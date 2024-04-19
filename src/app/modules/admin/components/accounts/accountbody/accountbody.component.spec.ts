import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountbodyComponent } from './accountbody.component';

describe('AccountbodyComponent', () => {
  let component: AccountbodyComponent;
  let fixture: ComponentFixture<AccountbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountbodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
