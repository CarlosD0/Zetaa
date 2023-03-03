import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VincularPage } from './vincular.page';

const routes: Routes = [
  {
    path: '',
    component: VincularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VincularPageRoutingModule {}
