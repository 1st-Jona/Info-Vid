import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { SobreCovid } from '../../models/sobre-covid';
import { SobreCovidService } from '../../services/sobre-covid.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-sobre-covid',
  templateUrl: './new-sobre-covid.page.html',
  styleUrls: ['./new-sobre-covid.page.scss'],
})
export class NewSobreCovidPage implements OnInit {
  flag:boolean=false;
  id:string;
  upl:boolean=false;
  add:boolean=false;
  public myForm:FormGroup;
  public sobreCovid:SobreCovid;
  sc:SobreCovid;
  constructor(private sobreCovidService:SobreCovidService, private fb:FormBuilder, private actroute:ActivatedRoute){
    this.actroute.queryParams.subscribe(
      params => {
      if (params && params.special){
        this.sc=JSON.parse(params.special) as SobreCovid;
        this.id=params.id;
         console.log(this.sc);
         this.flag=true;
       }
     }
    );


  }
  ngOnInit() {
    if(this.flag){
      this.myForm = this.fb.group({
        imagen:[this.sc.imagen],
        titulo: [this.sc.titulo],
        descripcion:[this.sc.descripcion]
      });

      this.upl=true;
      this.add=false;
    }else{
    this.myForm = this.fb.group({
      imagen:[""],
      titulo: [""],
      descripcion:[""]
    });
      this.upl=false;
      this.add=true;
    }
 
  }

  create(){
    this.sobreCovid = {
      titulo: this.myForm.controls.titulo.value,
      descripcion:this.myForm.controls.descripcion.value,
      imagen:this.myForm.controls.imagen.value
    }
    this.sobreCovidService.createSobreCovid(this.sobreCovid);
  }

  update(){
    this.sobreCovid = {
      imagen: this.myForm.controls.imagen.value,
      titulo: this.myForm.controls.titulo.value,
      descripcion: this.myForm.controls.descripcion.value

    }
    this.sobreCovidService.updateSobreCovid(this.sobreCovid, this.id);
  }


}
