import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { NoticiaService } from '../../services/noticia.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
public notices:Noticia[];
  constructor(private service:NoticiaService,private r:Router, private toast:ToastController) { 
    this.service.getNew().subscribe(data =>{
      this.notices = data.map(e=>{
        return{
          id:e.payload.doc.id,
          fecha:e.payload.doc.get("fecha"),
          imagen:e.payload.doc.get("imagen"),
          texto:e.payload.doc.get("texto"),
          titulo:e.payload.doc.get("titulo")
        }as Noticia
      })
    });
  } 

  ngOnInit() {
  }

  openNewNotice(){
    this.r.navigate(['/new-noticia']);
  }

  delete(id:string){
    this.service.deleteNoticia(this.notices[id].id);
    this.presentToast();
    this.r.navigate(['/noticias']);
  }

  toFormulario(i:string){
    let navext:NavigationExtras ={
      queryParams:{
        special:JSON.stringify(this.notices[i]),id:this.notices[i].id
      }
    };
    this.r.navigate(['/new-noticia'],navext);
  }

  async presentToast(){
    const t= await this.toast.create({
      message: 'Información eliminada',
      duration: 2000
    });
    t.present();
  }

}
