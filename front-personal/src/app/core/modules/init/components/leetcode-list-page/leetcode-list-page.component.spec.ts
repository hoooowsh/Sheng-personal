import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeListPageComponent } from './leetcode-list-page.component';

describe('LeetcodeListPageComponent', () => {
  let component: LeetcodeListPageComponent;
  let fixture: ComponentFixture<LeetcodeListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeetcodeListPageComponent]
    });
    fixture = TestBed.createComponent(LeetcodeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
