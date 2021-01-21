import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreCovidPageRoutingModule } from './sobre-covid-routing.module';

import { SobreCovidPage } from './sobre-covid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreCovidPageRoutingModule
  ],
  declarations: [SobreCovidPage]
})
export class SobreCovidPageModule {}
