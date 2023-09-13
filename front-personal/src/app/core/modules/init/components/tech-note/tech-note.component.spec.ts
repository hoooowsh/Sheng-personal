import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNoteComponent } from './tech-note.component';

describe('TechNoteComponent', () => {
  let component: TechNoteComponent;
  let fixture: ComponentFixture<TechNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechNoteComponent]
    });
    fixture = TestBed.createComponent(TechNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
