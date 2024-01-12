import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCallingComponent } from './user-calling.component';

describe('UserCallingComponent', () => {
  let component: UserCallingComponent;
  let fixture: ComponentFixture<UserCallingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCallingComponent]
    });
    fixture = TestBed.createComponent(UserCallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
