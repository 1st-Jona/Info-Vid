import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { SintomaService } from '../../services/sintoma.service';
import { Sintoma } from '../../models/sintoma';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-sintoma',
  templateUrl: './new-sintoma.page.html',
  styleUrls: ['./new-sintoma.page.scss'],
})
export class NewSintomaPage implements OnInit {
  flag:boolean=false;
  id:string;
  upl:boolean=false;
  add:boolean=false;
  public myForm:FormGroup;
  public sintoma:Sintoma;
  sint:Sintoma;

  constructor(private sintomaService:SintomaService,private fb:FormBuilder,private actroute:ActivatedRoute) { 
    this.actroute.queryParams.subscribe(
      params => {
      if (params && params.special){
        this.sint=JSON.parse(params.special) as   Sintoma;
        this.id=params.id;
         console.log(this.sint);
         this.flag=true;
       }
     }
    );
  }

  ngOnInit() { 



    if(this.flag){
      this.myForm=this.fb.group({
        frecuencia:[this.sint.frecuencia],
        nombre:[this.sint.nombre]
    });

      this.upl=true;
      this.add=false;
    }else{
      this.myForm=this.fb.group({
        frecuencia:[""],
        nombre:[""]
      });
      this.upl=false;
      this.add=true;
    }

  }
  create(){
    this.sintoma = {
      frecuencia: this.myForm.controls.frecuencia.value,
      nombre: this.myForm.controls.nombre.value

    }
    this.sintomaService.createSintoma(this.sintoma);
  }

}
