import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDemoComponent } from './output-demo.component';

describe('OutputDemoComponent', () => {
  let component: OutputDemoComponent;
  let fixture: ComponentFixture<OutputDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OutputDemoComponent]
    });
    fixture = TestBed.createComponent(OutputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
