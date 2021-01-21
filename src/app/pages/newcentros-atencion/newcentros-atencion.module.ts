import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcentrosAtencionPageRoutingModule } from './newcentros-atencion-routing.module';

import { NewcentrosAtencionPage } from './newcentros-atencion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcentrosAtencionPageRoutingModule
  ],
  declarations: [NewcentrosAtencionPage]
})
export class NewcentrosAtencionPageModule {}
