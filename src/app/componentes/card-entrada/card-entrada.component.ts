import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RangeCustomEvent, RangeValue } from '@ionic/core';

@Component({
  selector: 'app-card-entrada',
  templateUrl: './card-entrada.component.html',
  styleUrls: ['./card-entrada.component.scss'],
})
export class CardEntradaComponent implements OnInit {


  @Input() entrada!:{
    fecha: string,
    fechaTexto:string,
    texto:string
  };
  @Output() eventoGuardar:EventEmitter<{
    fecha:string,
    fechaTexto:string,
    texto:string
  }>=new EventEmitter<{
    fecha:string,
    fechaTexto:string,
    texto:string
  }>();;
  constructor() { }
  moveStart!: RangeValue;
  moveEnd!: RangeValue;

  onIonKnobMoveStart(ev: Event) {
    this.moveStart = (ev as RangeCustomEvent).detail.value;
  }

  onIonKnobMoveEnd(ev: Event) {
    this.moveEnd = (ev as RangeCustomEvent).detail.value;
  }

  ngOnInit() {}
  guardar(entrada:any){
    this.eventoGuardar.emit(this.entrada);

  }
  

  confirm(){

  }
  reset(){

  }

}
