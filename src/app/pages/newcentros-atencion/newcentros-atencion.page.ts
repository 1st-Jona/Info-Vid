import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CentroAtencion } from '../../models/centro-atencion';
import { CentroAtencionService } from '../../services/centro-atencion.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-newcentros-atencion',
  templateUrl: './newcentros-atencion.page.html',
  styleUrls: ['./newcentros-atencion.page.scss'],
})
export class NewcentrosAtencionPage implements OnInit {
  
  public myForm:FormGroup;
  public center:CentroAtencion;
  flag:boolean=false;
  id:string;
  upl:boolean=false;
  add:boolean=false;
  centro:CentroAtencion;
  constructor(private cs:CentroAtencionService, private fb:FormBuilder, private toast: ToastController, 
    private r:Router, private actroute:ActivatedRoute) {
      this.actroute.queryParams.subscribe(
        params => {
        if (params && params.special){
          this.centro=JSON.parse(params.special) as CentroAtencion;
          this.id=params.id;
           console.log(this.centro);
           this.flag=true;
         }
       }
      );
     }

  ngOnInit() {
    if(this.flag){
      this.myForm = this.fb.group({
        correo:[this.centro.correo],
        direccion:[this.centro.direccion],
        imagen:[this.centro.imagen],
        nombreLugar:[this.centro.nombreLugar],
        telefono:[this.centro.telefono]
      });

      this.upl=true;
      this.add=false;
    }else{
      this.myForm=this.fb.group({
        correo:[""],
        direccion:[""],
        imagen:[""],
        nombreLugar:[""],
        telefono:[""]
      });
      this.upl=false;
      this.add=true;
    }
  }

  limpiarCampos(){
    this.myForm=this.fb.group({
      correo:[""],
      direccion:[""],
      imagen:[""],
      nombreLugar:[""],
      telefono:[""]
    });
  }

  addNewCenter(){
    this.center={
      correo:this.myForm.controls.correo.value,
      direccion:this.myForm.controls.direccion.value,
      imagen:this.myForm.controls.imagen.value,
      nombreLugar:this.myForm.controls.nombreLugar .value,
      telefono:this.myForm.controls.telefono.value
    }
    this.cs.createCentro(this.center);
    this.limpiarCampos();
    this.presentToast("Centro agregado correctamente.");
  }

  updateCenter(){
    this.center={
      correo:this.myForm.controls.correo.value,
      direccion:this.myForm.controls.direccion.value,
      imagen:this.myForm.controls.imagen.value,
      nombreLugar:this.myForm.controls.nombreLugar .value,
      telefono:this.myForm.controls.telefono.value
    }
    this.cs.updateCentro(this.center, this.id);
    this.presentToast("Centro actualizado correctamente.");
    this.r.navigate(['/centros-atencion']);
  }

  async presentToast(mensaje: string){
    const t= await this.toast.create({
      message: mensaje,
      duration: 2000
    });
    t.present();
  }

}
