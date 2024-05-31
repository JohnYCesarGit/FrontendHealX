import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { medicamento } from '../../interface/Medicamentos';
import { ProductosService } from '../../services/productos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-medicamento',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './edit-medicamento.component.html',
  styleUrl: './edit-medicamento.component.css',
})
export class EditMedicamentoComponent implements OnInit {
  formulario: FormGroup;
  id: number;

  constructor(
    private frm: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router,
    private _productosService: ProductosService,
    private toast: ToastrService
  ) {
    this.formulario = this.frm.group({
      idmedicamento: [{ value: '', disabled: true }],
      nombremedicamento: ['', Validators.required],
      marca: ['', Validators.required],
      descripcion: ['', Validators.required],
      unidadmedida: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
    });
    this.id = aRouter.snapshot.paramMap.get('id') as unknown as number;
  }

  ngOnInit(): void {
    this.getProducto(this.id);
  }

  productosVal() {
    if (this.formulario.invalid) {
      return;
    }
    const product: medicamento = {
      id: this.id,
      stock: this.formulario.value.stock,
      nombremedicamento: this.formulario.value.nombremedicamento,
      marca: this.formulario.value.marca,
      unidaddemedida: this.formulario.value.unidadmedida,
      precio: this.formulario.value.precio,
      descripcion: this.formulario.value.descripcion,
    };

    this._productosService.updateProducto(this.id, product).subscribe({
      next: () => {
        this.router.navigate(['/list-medicamento']);
        this.toast.success('El medicamento fue actualizado exitosamente', 'Medicamento actualizado');
      },
      error: (err) => {
        this.toast.error('Error al actualizar el medicamento', 'Error');
      }
    });
  }

  getProducto(id: number) {
    this._productosService.getProducto(id).subscribe((data: medicamento) => {
      this.formulario.patchValue({
        idmedicamento: data.id,
        stock: data.stock,
        nombremedicamento: data.nombremedicamento,
        marca: data.marca,
        unidadmedida: data.unidaddemedida,
        precio: data.precio,
        descripcion: data.descripcion,
      });
    });
  }
}