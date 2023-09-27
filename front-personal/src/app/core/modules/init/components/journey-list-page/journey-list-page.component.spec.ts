import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyListPageComponent } from './journey-list-page.component';

describe('JourneyListPageComponent', () => {
  let component: JourneyListPageComponent;
  let fixture: ComponentFixture<JourneyListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyListPageComponent]
    });
    fixture = TestBed.createComponent(JourneyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
