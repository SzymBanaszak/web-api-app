import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddViewComponent } from './user-add-view.component';

describe('UserAddViewComponent', () => {
  let component: UserAddViewComponent;
  let fixture: ComponentFixture<UserAddViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
