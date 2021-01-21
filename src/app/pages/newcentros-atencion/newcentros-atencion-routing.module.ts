import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcentrosAtencionPage } from './newcentros-atencion.page';

const routes: Routes = [
  {
    path: '',
    component: NewcentrosAtencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcentrosAtencionPageRoutingModule {}
