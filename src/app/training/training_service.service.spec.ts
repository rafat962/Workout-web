/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Training_serviceService } from './training_service.service';

describe('Service: Training_service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Training_serviceService]
    });
  });

  it('should ...', inject([Training_serviceService], (service: Training_serviceService) => {
    expect(service).toBeTruthy();
  }));
});
