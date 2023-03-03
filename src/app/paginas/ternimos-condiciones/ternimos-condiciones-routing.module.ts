import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TernimosCondicionesPage } from './ternimos-condiciones.page';

const routes: Routes = [
  {
    path: '',
    component: TernimosCondicionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TernimosCondicionesPageRoutingModule {}
