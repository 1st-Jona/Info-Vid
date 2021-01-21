import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRecomendacionPage } from './new-recomendacion.page';

const routes: Routes = [
  {
    path: '',
    component: NewRecomendacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRecomendacionPageRoutingModule {}
