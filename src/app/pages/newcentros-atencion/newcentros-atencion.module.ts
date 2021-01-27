import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcentrosAtencionPageRoutingModule } from './newcentros-atencion-routing.module';

import { NewcentrosAtencionPage } from './newcentros-atencion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewcentrosAtencionPageRoutingModule
  ],
  declarations: [NewcentrosAtencionPage]
})
export class NewcentrosAtencionPageModule {}
