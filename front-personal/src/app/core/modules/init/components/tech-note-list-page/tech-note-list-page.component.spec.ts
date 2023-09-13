import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNoteListPageComponent } from './tech-note-list-page.component';

describe('TechNoteListPageComponent', () => {
  let component: TechNoteListPageComponent;
  let fixture: ComponentFixture<TechNoteListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechNoteListPageComponent]
    });
    fixture = TestBed.createComponent(TechNoteListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
