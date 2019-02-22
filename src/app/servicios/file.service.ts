import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()
export class FileService {

  constructor(private _http: HttpClient) {}

    downloadFile(file: String) {
        const body = {filename: file};

        const url = 'http://localhost:3000/api/upload/'
        return this._http.post(url, body, {
            responseType : 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
}
