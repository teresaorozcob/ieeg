import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

import {CargasModel} from '../modelos/cargasModel';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable()

export class UploadService {
    excel: [CargasModel]
    urlApi: String = 'http://localhost:3000/api/upload/';

    constructor(private _http: HttpClient) {}

    //SAVE:
    InsertDataExcel(excel: CargasModel){
        const url = this.urlApi + 'addExcel';
        return this._http.post<CargasModel>(url, excel, httpOptions)
    }









    //xtra:
    downloadFile(file: String) {
        const body = {filename: file};

        return this._http.post('http://localhost:3000/file/download', body, {
            responseType : 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
}
