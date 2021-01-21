import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Recomendacion } from "../../models/recomendacion";
import { RecomendacionService } from '../../services/recomendacion.service';

@Component({
  selector: 'app-new-recomendacion',
  templateUrl: './new-recomendacion.page.html',
  styleUrls: ['./new-recomendacion.page.scss'],
})
export class NewRecomendacionPage implements OnInit {

  public myForm:FormGroup;
  public recomendacion:Recomendacion;
  constructor(private recomendacionService:RecomendacionService, private fb:FormBuilder)
   { }

  ngOnInit() {
    this.myForm = this.fb.group({
      imagen:[""],
      informacion:[""]
    });
  }
  create(){
    this.recomendacion = {
      imagen: this.myForm.controls.imagen.value,
      informacion: this.myForm.controls.informacion.value

    }
    this.recomendacionService.createRecomendacion(this.recomendacion);
  }

}
