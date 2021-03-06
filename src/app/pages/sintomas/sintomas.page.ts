import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SintomaService } from '../../services/sintoma.service'
import { Sintoma } from 'src/app/models/sintoma';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})
export class SintomasPage implements OnInit {

  public sintoma: Sintoma[];
  constructor(private service:SintomaService,private r:Router, private toast:ToastController) { 
    this.service.getSintoma().subscribe(data=>{
      this.sintoma = data.map(e=>{
        return{
          id:e.payload.doc.id,
          frecuencia:e.payload.doc.get("frecuencia"),
          nombre:e.payload.doc.get("nombre")
        }as Sintoma;
      })
    });     
  }

  ngOnInit() {
  }
  openNewSintoma(){
    this.r.navigate(['/new-sintoma']);
  }

  delete(id:string){
    this.service.deleteSintoma(this.sintoma[id].id);
    this.presentToast();
    this.r.navigate(['/sintomas']);
  }

  toFormulario(i:string){
    let navext:NavigationExtras ={
      queryParams:{
        special:JSON.stringify(this.sintoma[i]),id:this.sintoma[i].id
      }
    };
    this.r.navigate(['/new-sintoma'],navext);
  }

  async presentToast(){
    const t= await this.toast.create({
      message: 'Sintoma eliminado',
      duration: 2000
    });
    t.present();
  }
}
