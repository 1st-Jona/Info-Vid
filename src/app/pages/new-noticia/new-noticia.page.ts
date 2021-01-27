import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../models/noticia';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-noticia',
  templateUrl: './new-noticia.page.html',
  styleUrls: ['./new-noticia.page.scss'],
})
export class NewNoticiaPage implements OnInit {
  flag:boolean=false;
  id:string;
  upl:boolean=false;
  add:boolean=false;
  public myForm:FormGroup;
  public notice:Noticia;
  not:Noticia;

  constructor(private ns:NoticiaService, private fb:FormBuilder,private actroute:ActivatedRoute) { 

    this.actroute.queryParams.subscribe(
      params => {
      if (params && params.special){
        this.not=JSON.parse(params.special) as Noticia;
        this.id=params.id;
         console.log(this.not);
         this.flag=true;
       }
     }
    );

  }

  ngOnInit() {
    


    if(this.flag){
      this.myForm=this.fb.group({
      fecha:[this.not.fecha],
      imagen:[this.not.imagen],
      texto:[this.not.texto],
      titulo:[this.not.titulo]
    });

      this.upl=true;
      this.add=false;
    }else{
      this.myForm=this.fb.group({
        fecha:[""],
        imagen:[""],
        texto:[""],
        titulo:[""]
      });
      this.upl=false;
      this.add=true;
    }
 



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

  update(){
    this.notice = {
      fecha:this.myForm.controls.fecha.value,
      imagen:this.myForm.controls.imagen.value,
      texto:this.myForm.controls.texto.value,
      titulo:this.myForm.controls.titulo.value

    }
    this.ns.updateNoticia(this.notice, this.id);
  }

}
