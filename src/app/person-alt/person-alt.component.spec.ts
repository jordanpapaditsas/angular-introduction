import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonAltComponent } from './person-alt.component';

describe('PersonAltComponent', () => {
  let component: PersonAltComponent;
  let fixture: ComponentFixture<PersonAltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PersonAltComponent]
    });
    fixture = TestBed.createComponent(PersonAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
