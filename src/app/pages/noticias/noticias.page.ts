import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia';
import { NoticiaService } from '../../services/noticia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
public notices:Noticia[];
  constructor(private service:NoticiaService,private r:Router) { 
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
    })
  }

  ngOnInit() {
  }

  openNewNotice(){
    this.r.navigate(['/new-noticia']);
  }

}
