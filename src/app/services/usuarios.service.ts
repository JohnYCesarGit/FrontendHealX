import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuarios } from '../interface/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private appUrl: string;
  private apiUsuarios: string;
  constructor(private http: HttpClient) {
    this.appUrl = 'http://localhost:3000/';
    this.apiUsuarios = 'api/usuarios/';
  }

  register(usuario: usuarios): Observable<any> {
    return this.http.post(this.appUrl + this.apiUsuarios + "register/",  usuario);
  }

  login(usuario: usuarios): Observable<any> {
    return this.http.post(this.appUrl + this.apiUsuarios + "login/",  usuario);
  }

}
