import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { medicamento } from '../../interface/Medicamentos';
import { ProductosService } from '../../services/productos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-medicamento',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './add-medicamento.component.html',
  styleUrl: './add-medicamento.component.css',
})
export class AddMedicamentoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private frm: FormBuilder,
    private _productosService: ProductosService,
    private router: Router,
    private toast: ToastrService
  ) {
    this.formulario = this.frm.group({
      stock: ['', Validators.required],
      nombremedicamento: ['', Validators.required],
      descripcion: ['', Validators.required],
      marca: ['', Validators.required],
      unidadmedida: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  addMedicamento() {
    const medicament: medicamento = {
      stock: this.formulario.get('stock')?.value,
      nombremedicamento: this.formulario.get('nombremedicamento')?.value,
      marca: this.formulario.get('marca')?.value,
      unidaddemedida: this.formulario.get('unidadmedida')?.value,
      precio: this.formulario.get('precio')?.value,
      descripcion: this.formulario.get('descripcion')?.value,
    };

    this._productosService.createProducto(medicament).subscribe(() => {
      this.router.navigate(['/list-medicamento']);
      this.toast.success(
        'El medicamento ' + medicament.nombremedicamento + ' fue creado exitosamente',
      )
    });
  }
}
