import { TestBed } from '@angular/core/testing';

import { ActionsModalService } from './actions-modal.service';

describe('ActionsModalService', () => {
  let service: ActionsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
