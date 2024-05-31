export interface medicamento {
  /*     Nombres de los datos como estan en la tabla de la DB
   */
  id?: number;
  stock: string;
  nombremedicamento: string;
  marca: string;
  unidaddemedida: string;
  precio: number;
  descripcion: string;
}
