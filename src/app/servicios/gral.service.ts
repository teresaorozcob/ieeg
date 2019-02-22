import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
export interface CarrerasModel {
  grado: string;
  nombre: string;
  info: string;
}
*/
export interface PeriodosModel {
  nombre: String,
  info: String
}

/*
@Injectable({
  providedIn: 'root'
})*/

@Injectable()
export class GralService {
  public url: string;

  urlApi: String = 'http://localhost:3000/api/';
  

  constructor(private _http: HttpClient) { 
    this.url = "http://5c61bd891325a200149764d0.mockapi.io/api/";
    
  }

  

  GetPeriodos_(){
    //const url = this.urlApi + 'periodos/' + 'getAll';
    const url = this.urlApi + 'periodos/' + 'getAll';
    //return this.http.get<PeriodosModel>(url)
  }

  getPeriodos(): Observable<any>{
    return this._http.get(this.url + "periodos");
  }
}
