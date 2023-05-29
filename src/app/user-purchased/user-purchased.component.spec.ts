import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchasedComponent } from './user-purchased.component';

describe('UserPurchasedComponent', () => {
  let component: UserPurchasedComponent;
  let fixture: ComponentFixture<UserPurchasedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPurchasedComponent]
    });
    fixture = TestBed.createComponent(UserPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
