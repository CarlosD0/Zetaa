import { InicioPageModule } from './paginas/inicio/inicio.module';
import { AuthGuard } from './guardar/auth.guard';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },*/
  {
    path: '',
    redirectTo: 'entrada',
    pathMatch: 'full'
    
  },
  /*{
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },*/
  
  
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'entradas-detalle',
    loadChildren: () => import('./paginas/entradas-detalle/entradas-detalle.module').then( m => m.EntradasDetallePageModule)
  },
  {
    path: 'ternimos-condiciones',
    loadChildren: () => import('./paginas/ternimos-condiciones/ternimos-condiciones.module').then( m => m.TernimosCondicionesPageModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./paginas/comentarios/comentarios.module').then( m => m.ComentariosPageModule)
  },
  {
    path: 'vincular',
    loadChildren: () => import('./paginas/vincular/vincular.module').then( m => m.VincularPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./paginas/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./paginas/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
