import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoProductoModel } from '../models/tipoProducto.model';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoServiceService {
  private urlApi = 'http://localhost:5160/api/tipo-productos';

  constructor(private http: HttpClient) { }

  obtenerTiposProducto(): Observable<TipoProductoModel[]> {
    return this.http.get<TipoProductoModel[]>(this.urlApi);
  }
}
