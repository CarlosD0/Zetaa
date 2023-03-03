import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TernimosCondicionesPageRoutingModule } from './ternimos-condiciones-routing.module';

import { TernimosCondicionesPage } from './ternimos-condiciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TernimosCondicionesPageRoutingModule
  ],
  declarations: [TernimosCondicionesPage]
})
export class TernimosCondicionesPageModule {}
