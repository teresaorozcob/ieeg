import { Component, OnInit, Output, EventEmitter } from '@angular/core';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-proceso',
  templateUrl: './select-proceso.component.html',
  styleUrls: ['./select-proceso.component.scss']
})
export class SelectProcesoComponent implements OnInit {
  @Output() selectedProceso = new EventEmitter();

  onSelectedProceso(proceso: string){
    this.selectedProceso.emit(proceso);
  }

  constructor() { }
  
  ngOnInit() {
  }

}
