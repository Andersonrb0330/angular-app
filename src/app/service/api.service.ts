import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisModel } from '../models/pais.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:5160/api/paises';

  constructor(private http: HttpClient) { }

  public getData(): Observable<PaisModel[]>{
    return this.http.get<PaisModel[]>(this.urlApi);
  }
}
