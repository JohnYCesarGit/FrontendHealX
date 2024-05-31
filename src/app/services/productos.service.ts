import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { medicamento } from '../interface/Medicamentos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private appUrl: string;
  private apiProductos: string;

  constructor(private http: HttpClient) {
    this.appUrl = 'http://localhost:3000/';
    this.apiProductos = 'api/productos/';
  }

  getProductos(): Observable<medicamento[]> {
    return this.http.get<medicamento[]>(this.appUrl + this.apiProductos);
  }

  getProducto(id: number): Observable<medicamento> {
    return this.http.get<medicamento>(this.appUrl + this.apiProductos + id);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(this.appUrl + this.apiProductos + id);
  }
  updateProducto(id: number, medicament: medicamento): Observable<void>{
    return this.http.put<void>(this.appUrl + this.apiProductos + id, medicament);
  }
  createProducto(medicament: medicamento): Observable<void>{
    return this.http.post<void>(this.appUrl + this.apiProductos, medicament);
  }
}
