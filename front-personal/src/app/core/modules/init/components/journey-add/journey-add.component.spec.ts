import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyAddComponent } from './journey-add.component';

describe('JourneyAddComponent', () => {
  let component: JourneyAddComponent;
  let fixture: ComponentFixture<JourneyAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyAddComponent]
    });
    fixture = TestBed.createComponent(JourneyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
