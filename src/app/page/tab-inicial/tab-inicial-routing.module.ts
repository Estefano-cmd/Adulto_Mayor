import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children: [
      {
        path: 'informacion',
        loadChildren: () => import('./../../page/informacion/informacion.module').then( m => m.InformacionPageModule)
      },
      {
        path: 'guia',
        loadChildren: () => import('./../../page/guia/guia.module').then( m => m.GuiaPageModule)
      },
      {
        path: 'temas',
        loadChildren: () => import('./../../page/temas/temas.module').then( m => m.TemasPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
