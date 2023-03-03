import { CardEntradaComponent } from './card-entrada/card-entrada.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CardEntradaComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[CardEntradaComponent]
})
export class ModuloComponentesModule { }
