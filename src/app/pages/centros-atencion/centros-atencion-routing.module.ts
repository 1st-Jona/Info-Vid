import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosAtencionPage } from './centros-atencion.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosAtencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrosAtencionPageRoutingModule {}
