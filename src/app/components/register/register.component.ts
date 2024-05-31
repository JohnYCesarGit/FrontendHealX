import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { usuarios } from '../../interface/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  nombre: string = '';
  correo: string = '';
  password: string = '';

  constructor(
    private _usuariosService: UsuariosService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  addUsuario() {
    if (this.correo == '' || this.password == '' || this.nombre == '') {
      this.toast.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    const usuario: usuarios = {
      nombre: this.nombre,
      correo: this.correo,
      password: this.password,
    };

    this._usuariosService.register(usuario).subscribe({
      next: (v) => {
        this.toast.success('Usuario registrado', 'Exito');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.toast.error(e.error.msg, 'Error');
        this.mensajeError(e);
      },
    });
  }

  mensajeError(e: HttpErrorResponse) {
    if (e.error.msg) {
      this.toast.error(e.error.msg, 'Error');
      console.log(e.error.msg);
    } else {
      this.toast.error('Por favor intente de nuevo', 'Error');
      console.log('Sorry');
    }
  }
}
