import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-new-noticia',
  templateUrl: './new-noticia.page.html',
  styleUrls: ['./new-noticia.page.scss'],
})
export class NewNoticiaPage implements OnInit {

  public myForm:FormGroup;
  public notice:Noticia;


  constructor(private ns:NoticiaService, private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm=this.fb.group({
      fecha:[""],
      imagen:[""],
      texto:[""],
      titulo:[""]
    });
  }

  addNew(){
    this.notice={
      fecha:this.myForm.controls.fecha.value,
      imagen:this.myForm.controls.imagen.value,
      texto:this.myForm.controls.texto.value,
      titulo:this.myForm.controls.titulo.value
    }
    this.ns.createNew(this.notice);
  
  }

}
