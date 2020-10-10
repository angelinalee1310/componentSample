import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetRatingsComponent } from './reset-ratings.component';

describe('ResetRatingsComponent', () => {
  let component: ResetRatingsComponent;
  let fixture: ComponentFixture<ResetRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
