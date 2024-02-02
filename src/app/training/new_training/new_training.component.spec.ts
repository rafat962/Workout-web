/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { New_trainingComponent } from './new_training.component';

describe('New_trainingComponent', () => {
  let component: New_trainingComponent;
  let fixture: ComponentFixture<New_trainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New_trainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New_trainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
