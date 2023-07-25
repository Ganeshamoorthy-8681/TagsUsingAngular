import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedDataComponent } from './submitted-data.component';

describe('SubmittedDataComponent', () => {
  let component: SubmittedDataComponent;
  let fixture: ComponentFixture<SubmittedDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmittedDataComponent]
    });
    fixture = TestBed.createComponent(SubmittedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
