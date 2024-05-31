import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorNotificacionService {
  constructor() {}

  mensajeError(e: HttpErrorResponse) {
    if (e.error.msg) {
      console.log(e.error.msg);
    } else {
      console.log('Sorry');
    }
  }
}
