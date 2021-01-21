import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSintomaPage } from './new-sintoma.page';

const routes: Routes = [
  {
    path: '',
    component: NewSintomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSintomaPageRoutingModule {}
