import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { CargasModel } from '../modelos/cargasModel'; 

@Injectable()
export class CargasService {
    public excel: Array<CargasModel>;
    public url: string;

    constructor(private _http: HttpClient){

        /*para el array
        this.excel =[
            new ExcelModel('Matricula_20180101', '2018-01-01', 'ccc929857345', 300, 'xls', 'ene-jul 2018', 'MATRICULA INSCRITA', '2019-01-01'),
            new ExcelModel('Matricula_20180606', '2018-01-01', 'ccc929857345', 300, 'xls', 'ene-jul 2018', 'MATRICULA INSCRITA', '2019-01-01'),
            new ExcelModel('Matricula_20190101', '2018-01-01', 'ccc929857345', 300, 'xls', 'ene-jul 2018', 'MATRICULA INSCRITA', '2019-01-01')
        ];*/

        //this.url = "http://5c5dfd4aef282f0014c3d9dc.mockapi.io/api/cargas";
        //this.url = "http://5c61bd891325a200149764d0.mockapi.io/api/cargas";
        //this.url = "http://5c61bd891325a200149764d0.mockapi.io/api/periodos/3/cargas";
        this.url = "http://5c61bd891325a200149764d0.mockapi.io/api/";
    }


    getCargas(idPeriodo): Observable<any> {
        var uri = this.url + "periodos/" + idPeriodo + "/cargas";
        //console.log("uri: ", uri)
        return this._http.get(uri);
    }

    getCargasByProceso(idPeriodo, proceso): Observable<any> { //implicito el Periodo
        var uri = this.url + "periodos/" + idPeriodo + "/cargas?filter=" + proceso;
        //console.log("uri: ", uri)
        return this._http.get(uri);
    }




    addCarga(carga): Observable<any>{
        let params = JSON.stringify(carga);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        var uri = this.url + "periodos/" + carga.periodo + "/cargas";

        return this._http.post(uri, params, {headers: headers});
        //return this._http.post(this.url, params, {headers: headers});
    }

    /*para obtener el array del modelo sin api
    getCargas(): Array<ExcelModel>{ //retornará este tipo Array<ExcelModel>
        return this.excel;
    }*/
}