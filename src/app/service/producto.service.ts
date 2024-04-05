import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlApi = 'http://localhost:5160/api/productos';

  constructor(private http: HttpClient) { }

  public getData(): Observable<ProductoModel[]>{
    return this.http.get<ProductoModel[]>(this.urlApi);
  }

  guardarProducto(producto: ProductoModel): Observable<ProductoModel> {
    return this.http.post<ProductoModel>(this.urlApi, producto);
  }

}
