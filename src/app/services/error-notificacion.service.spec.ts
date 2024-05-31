import { TestBed } from '@angular/core/testing';

import { ErrorNotificacionService } from './error-notificacion.service';

describe('ErrorNotificacionService', () => {
  let service: ErrorNotificacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorNotificacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
