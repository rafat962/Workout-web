/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Current_trainingComponent } from './Current_training.component';

describe('Current_trainingComponent', () => {
  let component: Current_trainingComponent;
  let fixture: ComponentFixture<Current_trainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Current_trainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Current_trainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
