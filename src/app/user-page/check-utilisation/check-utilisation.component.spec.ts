import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUtilisationComponent } from './check-utilisation.component';

describe('CheckUtilisationComponent', () => {
  let component: CheckUtilisationComponent;
  let fixture: ComponentFixture<CheckUtilisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckUtilisationComponent]
    });
    fixture = TestBed.createComponent(CheckUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
