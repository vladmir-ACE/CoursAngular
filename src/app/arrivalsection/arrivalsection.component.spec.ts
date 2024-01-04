import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalsectionComponent } from './arrivalsection.component';

describe('ArrivalsectionComponent', () => {
  let component: ArrivalsectionComponent;
  let fixture: ComponentFixture<ArrivalsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrivalsectionComponent]
    });
    fixture = TestBed.createComponent(ArrivalsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
