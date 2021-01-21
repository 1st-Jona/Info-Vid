import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosAtencionPageRoutingModule } from './centros-atencion-routing.module';

import { CentrosAtencionPage } from './centros-atencion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosAtencionPageRoutingModule
  ],
  declarations: [CentrosAtencionPage]
})
export class CentrosAtencionPageModule {}
