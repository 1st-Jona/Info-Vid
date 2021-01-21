import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreCovidPage } from './sobre-covid.page';

const routes: Routes = [
  {
    path: '',
    component: SobreCovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreCovidPageRoutingModule {}
