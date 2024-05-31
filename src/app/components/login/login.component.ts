import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';
import { usuarios } from '../../interface/usuarios';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorNotificacionService } from '../../services/error-notificacion.service';
import { addJWTInterceptor } from '../../interceptors/add-jwt.interceptor';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  correo: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private _usuariosService: UsuariosService,
    private _errorNotificacionService: ErrorNotificacionService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.correo == '' || this.password == '') {
      this.toast.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    const usuario: usuarios = {
      correo: this.correo,
      password: this.password,
    };

    this._usuariosService.login(usuario).subscribe({
      next: (TOKEN) => {
        localStorage.setItem('token', TOKEN);
        this.router.navigate(['/list-medicamento']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorNotificacionService.mensajeError(e);
      },
    });
  }
}
