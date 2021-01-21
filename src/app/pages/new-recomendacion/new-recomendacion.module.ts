import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRecomendacionPageRoutingModule } from './new-recomendacion-routing.module';

import { NewRecomendacionPage } from './new-recomendacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRecomendacionPageRoutingModule
  ],
  declarations: [NewRecomendacionPage]
})
export class NewRecomendacionPageModule {}
