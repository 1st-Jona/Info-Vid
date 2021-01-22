import { Component, OnInit } from '@angular/core';
import { RecomendacionService } from '../../services/recomendacion.service';
import { Recomendacion } from '../../models/recomendacion';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {

  public recomendacion: Recomendacion[];
  constructor(private service:RecomendacionService,private r:Router, private toast:ToastController) { 
  

    this.service.getRecomendacion().subscribe(data =>{
      this.recomendacion = data.map(e=>{
        return{
          id:e.payload.doc.id,
          imagen:e.payload.doc.get("imagen"),
          informacion:e.payload.doc.get("informacion")
        }as Recomendacion
      })
    });
  }

  ngOnInit() {
  }
  openNewRecomendacion(){
    this.r.navigate(['/new-recomendacion']);
  }
  

  toFormulario(i:string){
    let navext:NavigationExtras ={
      queryParams:{
        special:JSON.stringify(this.recomendacion[i]),id:this.recomendacion[i].id
      }
    };
    this.r.navigate(['/new-recomendacion'],navext);
  }


  delete(id:string){
    this.service.deleteRecomendacion(this.recomendacion[id].id);
    this.presentToast();
    this.r.navigate(['/recomendaciones']);
  }

  async presentToast(){
    const t= await this.toast.create({
      message: 'Recomendacion eliminada',
      duration: 2000
    });
    t.present();
  }

}
