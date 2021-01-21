import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewSobreCovidPageRoutingModule } from './new-sobre-covid-routing.module';

import { NewSobreCovidPage } from './new-sobre-covid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSobreCovidPageRoutingModule
  ],
  declarations: [NewSobreCovidPage]
})
export class NewSobreCovidPageModule {}
