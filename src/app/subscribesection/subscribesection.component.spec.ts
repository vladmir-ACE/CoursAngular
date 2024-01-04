import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribesectionComponent } from './subscribesection.component';

describe('SubscribesectionComponent', () => {
  let component: SubscribesectionComponent;
  let fixture: ComponentFixture<SubscribesectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribesectionComponent]
    });
    fixture = TestBed.createComponent(SubscribesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
