import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VincularPageRoutingModule } from './vincular-routing.module';

import { VincularPage } from './vincular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VincularPageRoutingModule
  ],
  declarations: [VincularPage]
})
export class VincularPageModule {}
