import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CargasService} from '../../servicios/cargas.service';



import { CargasModel } from '../../modelos/cargasModel';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  periodoSelected: string = '';
  showProcesos: boolean;

  public carga: Array<CargasModel>;
  //public cargas: any;
  //public cargas: Array<any>;
  public cargas: [any];


  constructor(
    private _formBuilder: FormBuilder,
    private _cargaService: CargasService
    ) 
    { 
      
  }

  ngOnInit() {

    //color:
    let floorElements = document.getElementsByClassName("mat-stepper-horizontal") as HTMLCollectionOf<HTMLElement>;
    floorElements[0].style.background = "#d2d2d2";
    //console.log("floorElements: " , floorElements);


    //mat-input-flex mat-form-field-flex
    var selPer = document.getElementsByTagName("app-select-periodo") as HTMLCollectionOf<HTMLElement>;    
    selPer[0].style.background = "#83d7e2";


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.showProcesos = false;
    
    
  }

  DeleteCargaXls(index){
    console.log("heyyy", index);
    /*const idx: number = this.carga.indexOf(index);
    if(idx !== -1){
      this.carga.splice(index, 1);
    }
    */
   this.carga.splice(index, 1);
    
  }

  getPeriodo(value) {
    this.periodoSelected = value;
    //console.log("se trajo el periodo seleccionado: ", value)

    this.loadCargas(value);
  }

  loadCargas(value = null){
    let total: Number;
    this._cargaService.getCargas(value).subscribe(
      result => {
        this.showProcesos = true;
        this.cargas = result;
        //console.log("total cargas: ", this.cargas.length);
        total = this.cargas.length;

        if(total == 5){ // canytidad de archivos necesarios = 5
          this.isLinear = false;
        }
        else{
          this.isLinear = true;
        }

        

      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
