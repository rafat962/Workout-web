/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Past_trainingComponent } from './past_training.component';

describe('Past_trainingComponent', () => {
  let component: Past_trainingComponent;
  let fixture: ComponentFixture<Past_trainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Past_trainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Past_trainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
