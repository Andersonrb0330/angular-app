export interface ProductoModel {
    id: number;
    nombre: string;
    descripcion: string;
    stock: number;
    estado: boolean;
    precio: number;
    idTipoProducto: number;
}