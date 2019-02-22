import { Component, OnInit, ElementRef, Input, Output } from '@angular/core';

import { GralService } from '../../servicios/gral.service';
import {CargasService } from '../../servicios/cargas.service';
import {UploadService} from '../../servicios/upload.service';

import {CargasModel} from '../../modelos/cargasModel';

import { NotificacionController } from '../../controllers/notificacionesCtrl';

import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
const URL = 'http://localhost:3000/api/upload/addFile';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  public prueba_fileName : String;
  public archivosExcel: CargasModel;
  periodoSelected: string = '';
  procesoSelected: string = '';
  periodos: String;
  public per: Number;
  public today = new Date(Date.parse(Date())).toLocaleString();
  dataExcel: any;
  public cargas: [any];

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  public title = 'app works!';
  attachmentList: any = [];
  notif = new NotificacionController();
  //public loading: boolean;

  constructor(
    private http: Http, 
    private el: ElementRef, 
    private uploadService: UploadService,
    public _gralService: GralService,
    public _cargaService: CargasService
    ) 
  {
      
        //console.log("=================================////==================");
        this.uploader.onCompleteItem = (item: any, response: any , status: any, headers: any) => {
          this.attachmentList.push(JSON.parse(response));
      }

    
  }


  ngOnInit() {
    //console.log("hoy es:" , this.today);
    //GetPeriodos
    this._gralService.getPeriodos().subscribe(result => {
      //console.log("get per: ", result[0].nombre);
      //this.periodos = result[0].nombre; 
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false;}; //cuando selecciona el archivo
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => { //cuando da click en el botón "subir"
      //if(response != ""){        ////////////////////////////////////////////////////////////server api upload
        //console.log('FileName_API: ', response);
        //console.log('FileName_Uploaders: ', item.file.name);
        this.dataExcel = item.file;

        //validar si seleccióno combos:
        if(this.periodoSelected != "" && this.procesoSelected != ""){
          //console.log("per: ", this.periodoSelected + "proceso: " + this.procesoSelected);


          //validar si ya están los archivos necesarios:
          //where proceso = {} and periodo = {} && proceso <> {}

          this._cargaService.getCargasByProceso(this.periodoSelected, this.procesoSelected).subscribe(
            result => {
              var total;
              //console.log(result);
              this.cargas = result;
      
              total = this.cargas.length;

              if(total == 0){
                //console.log("se puede insertar");

                       //validar si es un XLS
                if(this.dataExcel.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
                  this.archivosExcel = {        
                    "fecha_carga": this.today,
                    "nombre_original": this.dataExcel.name,
                    "fecha_archivo": this.dataExcel.rawFile.lastModifiedDate.toLocaleString(),
                    "nombre_fileApi": response,
                    "tamanio":  this.convertBytes(this.dataExcel.size),
                    "tipo": this.dataExcel.type,
                    "periodo": this.periodoSelected,
                    "proceso": this.procesoSelected
                  };
            
                this.saveFileExcel(this.archivosExcel);
                }
                else{
                  var err = "El archivo debe ser forzosamente de Excel";
                  this.notif.showNotification('bottom', 'center', err, 'danger', 'warning');
                }
              }
              else{
                //console.log("NO se puede insertar");
                var err = "Ya existe un documento con el mismo proceso en este periodo";
                this.notif.showNotification('top', 'center', err, 'danger', 'not_interested');
              }
            },
            error => {
              console.log(<any>error);
            }
            
          );
         
        }
        else{
          //console.log("no seleccionó");
          var err = "Debes seleccionar el Periodo y el Proceso correspondiente";
          this.notif.showNotification('bottom', 'center', err, 'danger', 'warning');
        }

      /*}
      else{
        var err = "Problemas con servidor de archivos. Favor de contactar a informática.";
        this.notif.showNotification('bottom', 'center', err, 'danger', 'warning');
        console.log(err);
        
        //console.log("loading_2: ", this.loading);
      }*/
      
     // this.loading = false;
     
    };

  
   }

  getPeriodo(value) {
    this.periodoSelected = value;
    //console.log("se trajo el periodo seleccionado: ", value)
  }

  getProceso(value) {
    this.procesoSelected = value;
    //console.log("se trajo el PROCESO seleccionado: ", value)
  }

  getCargasByProceso(periodo, proceso) : Number{ //implícito el periodo
    let total:Number;

    this._cargaService.getCargasByProceso(periodo, proceso).subscribe(
      result => {
        console.log(result);
        this.cargas = result;

        return total = this.cargas.length;
      },
      error => {
        console.log(<any>error);
      }
      
    );

    return total;

   

  }

  saveFileExcel(data){
  this._cargaService.addCarga(data).subscribe(
    response => {
      //console.log(response);
      this.notif.showNotification('top', 'right', 'Carga existosa', 'success', 'cloud_done')
    },
    error => {
      console.log(<any>error);
      this.notif.showNotification('top', 'right', 'Ocurrió un error:[' + error + ']', 'danger', 'warning')
    }
  );
  
  }

  convertBytes(data){ //data está en bytes
    var tamanio: String;
    var _mientras;

    if(data < 1048576){
      _mientras = (data / 1024).toFixed(2);
      tamanio =  _mientras + " KB";
    }
    else {
      _mientras = (data / 1048576).toFixed(2);
      tamanio = _mientras + " MB";
    }
    return tamanio;
  }
}
