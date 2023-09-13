import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNoteAddComponent } from './tech-note-add.component';

describe('TechNoteAddComponent', () => {
  let component: TechNoteAddComponent;
  let fixture: ComponentFixture<TechNoteAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechNoteAddComponent]
    });
    fixture = TestBed.createComponent(TechNoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
