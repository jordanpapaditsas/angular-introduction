import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindComponent } from './event-bind.component';

describe('EventBindComponent', () => {
  let component: EventBindComponent;
  let fixture: ComponentFixture<EventBindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EventBindComponent]
    });
    fixture = TestBed.createComponent(EventBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
