import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeAddComponent } from './leetcode-add.component';

describe('LeetcodeAddComponent', () => {
  let component: LeetcodeAddComponent;
  let fixture: ComponentFixture<LeetcodeAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeetcodeAddComponent]
    });
    fixture = TestBed.createComponent(LeetcodeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
