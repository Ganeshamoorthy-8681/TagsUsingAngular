import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagviewComponent } from './tagview.component';

describe('TagviewComponent', () => {
  let component: TagviewComponent;
  let fixture: ComponentFixture<TagviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagviewComponent]
    });
    fixture = TestBed.createComponent(TagviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
