import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Recomendacion } from "../../models/recomendacion";
import { RecomendacionService } from '../../services/recomendacion.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-recomendacion',
  templateUrl: './new-recomendacion.page.html',
  styleUrls: ['./new-recomendacion.page.scss'],
})
export class NewRecomendacionPage implements OnInit {
  flag:boolean=false;
  id:string;
  upl:boolean=false;
  add:boolean=false;
  public myForm:FormGroup;
  public recomendacion:Recomendacion;
  recom:Recomendacion;
  constructor(private recomendacionService:RecomendacionService, private fb:FormBuilder,private toast:ToastController,
    private r:Router,
    private actroute:ActivatedRoute)
   { 

     this.actroute.queryParams.subscribe(
       params => {
       if (params && params.special){
         this.recom=JSON.parse(params.special) as Recomendacion;
         this.id=params.id;
          console.log(this.recom);
          this.flag=true;
        }
      }
     );
   }

  ngOnInit() {
    if(this.flag){
      this.myForm = this.fb.group({
        imagen:[this.recom.imagen],
        informacion:[this.recom.informacion]
      });

      this.upl=true;
      this.add=false;
    }else{
    this.myForm = this.fb.group({
      imagen:[""],
      informacion:[""]
    });
      this.upl=false;
      this.add=true;
    }
 
  }
  create(){
    this.recomendacion = {
      imagen: this.myForm.controls.imagen.value,
      informacion: this.myForm.controls.informacion.value

    }
    this.recomendacionService.createRecomendacion(this.recomendacion);
  }

  update(){
    this.recomendacion = {
      imagen: this.myForm.controls.imagen.value,
      informacion: this.myForm.controls.informacion.value
    }
    this.recomendacionService.updateRecomendacion(this.recomendacion, this.id);
  }

}
