import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhysectionComponent } from './whysection.component';

describe('WhysectionComponent', () => {
  let component: WhysectionComponent;
  let fixture: ComponentFixture<WhysectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhysectionComponent]
    });
    fixture = TestBed.createComponent(WhysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
