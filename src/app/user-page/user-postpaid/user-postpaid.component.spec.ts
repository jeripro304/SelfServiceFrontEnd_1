import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostPaidComponent } from './user-postpaid.component';

describe('UserPrepaidComponent', () => {
  let component: UserPostPaidComponent;
  let fixture: ComponentFixture<UserPostPaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPostPaidComponent]
    });
    fixture = TestBed.createComponent(UserPostPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
