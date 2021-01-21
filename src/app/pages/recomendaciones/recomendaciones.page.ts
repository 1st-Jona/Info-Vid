import { Component, OnInit } from '@angular/core';
import { RecomendacionService } from '../../services/recomendacion.service';
import { Recomendacion } from '../../models/recomendacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {

  public recomendacion: Recomendacion[];
  constructor(private service:RecomendacionService,private r:Router) { 
  

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

}
