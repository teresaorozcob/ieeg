import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GralService } from '../../servicios/gral.service';


export interface Periodo {
  value: string;
  viewValue: string;
  info: String;
}

@Component({
  selector: 'app-select-periodo',
  templateUrl: './select-periodo.component.html',
  styleUrls: ['./select-periodo.component.scss']
})
export class SelectPeriodoComponent implements OnInit {
  //@Output() selectedPeriodo = new EventEmitter<string>();
  @Output() selectedPeriodo = new EventEmitter();
  periodos: [String];
  //periodo: string;

  

  onSelectedPeriodo(periodo: string){
    //console.log("periodo en hijo", periodo)
    this.selectedPeriodo.emit(periodo);
  }
  
  constructor(
    public gralService: GralService,
    ) { }

  
  ngOnInit() {

    //GetPeriodos
    this.gralService.getPeriodos().subscribe(result => {
      //console.log("periodos: ", result.info)
      //console.log("periodos: ", result)
      this.periodos = result; 
    });

  }

}
