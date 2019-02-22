import { Component, OnInit, Input } from '@angular/core';
import { CargasModel } from '../../modelos/cargasModel';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss']
})
export class CargaComponent implements OnInit {
  @Input('carga') carga: CargasModel;

  constructor() { }

  ngOnInit() {
  }

  // aquí o en Timeline
  DeleteElemento(id){
    //llamar api
  }

}
