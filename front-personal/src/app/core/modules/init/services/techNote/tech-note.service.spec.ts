import { TestBed } from '@angular/core/testing';

import { TechNoteService } from './tech-note.service';

describe('TechNoteService', () => {
  let service: TechNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
