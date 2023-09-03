import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtListPageComponent } from './thought-list-page.component';

describe('ThoughtListPageComponent', () => {
  let component: ThoughtListPageComponent;
  let fixture: ComponentFixture<ThoughtListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThoughtListPageComponent]
    });
    fixture = TestBed.createComponent(ThoughtListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
