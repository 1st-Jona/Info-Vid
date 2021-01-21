import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewSobreCovidPage } from './new-sobre-covid.page';

const routes: Routes = [
  {
    path: '',
    component: NewSobreCovidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSobreCovidPageRoutingModule {}
