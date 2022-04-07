import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsEditViewComponent } from './user-details-edit-view.component';

describe('UserDetailsEditViewComponent', () => {
  let component: UserDetailsEditViewComponent;
  let fixture: ComponentFixture<UserDetailsEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
