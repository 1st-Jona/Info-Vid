import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewSintomaPageRoutingModule } from './new-sintoma-routing.module';

import { NewSintomaPage } from './new-sintoma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSintomaPageRoutingModule
  ],
  declarations: [NewSintomaPage]
})
export class NewSintomaPageModule {}
