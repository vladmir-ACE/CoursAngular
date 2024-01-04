import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersectionComponent } from './slidersection.component';

describe('SlidersectionComponent', () => {
  let component: SlidersectionComponent;
  let fixture: ComponentFixture<SlidersectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidersectionComponent]
    });
    fixture = TestBed.createComponent(SlidersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
