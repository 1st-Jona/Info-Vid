import { Component, OnInit } from '@angular/core';
import { SobreCovidService } from '../../services/sobre-covid.service'
import { SobreCovid } from 'src/app/models/sobre-covid';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sobre-covid',
  templateUrl: './sobre-covid.page.html',
  styleUrls: ['./sobre-covid.page.scss'],
})
export class SobreCovidPage implements OnInit {

  public sobreCovids: SobreCovid[];
  constructor(private service:SobreCovidService,private r:Router, private toast:ToastController) { 
    this.service.getSobreCovid().subscribe(data=>{
      this.sobreCovids = data.map(e=>{
        return{
          id:e.payload.doc.id,
          titulo:e.payload.doc.get("titulo"),
          imagen:e.payload.doc.get("imagen"),
          descripcion:e.payload.doc.get("descripcion")
        }as SobreCovid;
      })
    });
  }

  ngOnInit() {
    
  }

  openNewSobreCovid(){
    this.r.navigate(['/new-sobre-covid']);
  }
  
  delete(id:string){
    this.service.deleteSobreCovid(this.sobreCovids[id].id);
    this.presentToast();
    this.r.navigate(['/sobre-covid']);
  }

  async presentToast(){
    const t= await this.toast.create({
      message: 'Recomendacion eliminada',
      duration: 2000
    });
    t.present();
  }

}
