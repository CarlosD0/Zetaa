import { ModuloComponentesModule } from './../../componentes/modulo-componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradasDetallePageRoutingModule } from './entradas-detalle-routing.module';

import { EntradasDetallePage } from './entradas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradasDetallePageRoutingModule,
    ModuloComponentesModule
  ],
  declarations: [EntradasDetallePage]
})
export class EntradasDetallePageModule {}
