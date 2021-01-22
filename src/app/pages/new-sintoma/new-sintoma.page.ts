import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { SintomaService } from '../../services/sintoma.service';
import { Sintoma } from '../../models/sintoma';

@Component({
  selector: 'app-new-sintoma',
  templateUrl: './new-sintoma.page.html',
  styleUrls: ['./new-sintoma.page.scss'],
})
export class NewSintomaPage implements OnInit {

  public myForm:FormGroup;
  public sintoma:Sintoma;
  

  constructor(private sintomaService:SintomaService,private fb:FormBuilder) { }

  ngOnInit() {

    this.myForm=this.fb.group({
      frecuencia:[""],
      nombre:[""]
    });
  }
  create(){
    this.sintoma = {
      frecuencia: this.myForm.controls.frecuencia.value,
      nombre: this.myForm.controls.nombre.value

    }
    this.sintomaService.createSintoma(this.sintoma);
  }

}
