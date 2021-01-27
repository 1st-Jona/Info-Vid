import { Component, OnInit } from '@angular/core';
import { CentroAtencion } from '../../models/centro-atencion';
import { CentroAtencionService } from '../../services/centro-atencion.service';
import { NavigationExtras,Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-centros-atencion',
  templateUrl: './centros-atencion.page.html',
  styleUrls: ['./centros-atencion.page.scss'],
})
export class CentrosAtencionPage implements OnInit {

  public centers: CentroAtencion[];
  constructor(private service:CentroAtencionService,private r:Router, private toast:ToastController) {
    this.service.getCentros().subscribe(data =>{
      this.centers = data.map(e=>{
        return{
          id:e.payload.doc.id,
          correo:e.payload.doc.get("correo"),
          direccion:e.payload.doc.get("direccion"),
          imagen:e.payload.doc.get("imagen"),
          nombreLugar:e.payload.doc.get("nombreLugar"),
          telefono:e.payload.doc.get("telefono")
        }as CentroAtencion
      })
    })
   }

  ngOnInit() {
  }

  openNewCenter(){
    this.r.navigate(['/newcentros-atencion']);
  }

  updateCenter(i:string){
    let navext:NavigationExtras ={
      queryParams:{
        special:JSON.stringify(this.centers[i]),id:this.centers[i].id
      }
    };
    this.r.navigate(['/newcentros-atencion'],navext);
  }

  deleteCentro(id:string){
    this.service.deleteCentro(this.centers[id].id);
    this.presentToast("Centro eliminado");
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