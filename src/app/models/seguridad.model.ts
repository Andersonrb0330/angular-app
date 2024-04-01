import { EmpleadoModel } from "./empleado.model";

export interface SeguridadModel{
    token?: string;
    empleado?: EmpleadoModel;
}