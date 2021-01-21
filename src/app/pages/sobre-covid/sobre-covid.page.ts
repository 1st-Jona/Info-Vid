import { Component, OnInit } from '@angular/core';
import { SobreCovidService } from '../../services/sobre-covid.service'
import { SobreCovid } from 'src/app/models/sobre-covid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-covid',
  templateUrl: './sobre-covid.page.html',
  styleUrls: ['./sobre-covid.page.scss'],
})
export class SobreCovidPage implements OnInit {

  public sobreCovids: SobreCovid[];
  constructor(private service:SobreCovidService,private r:Router) { 
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

}
