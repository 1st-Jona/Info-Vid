import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { SobreCovid } from '../../models/sobre-covid';
import { SobreCovidService } from '../../services/sobre-covid.service';
@Component({
  selector: 'app-new-sobre-covid',
  templateUrl: './new-sobre-covid.page.html',
  styleUrls: ['./new-sobre-covid.page.scss'],
})
export class NewSobreCovidPage implements OnInit {

  public myForm:FormGroup;
  public sobreCovid:SobreCovid;
  constructor(private sobreCovidService:SobreCovidService, private fb:FormBuilder){}
  ngOnInit() {
    this.myForm = this.fb.group({
      titulo: [""],
      imagen:[""],
      descripcion:[""]
    });
  }

  create(){
    this.sobreCovid = {
      titulo: this.myForm.controls.titulo.value,
      descripcion:this.myForm.controls.descripcion.value,
      imagen:this.myForm.controls.imagen.value
    }
    this.sobreCovidService.createSobreCovid(this.sobreCovid);
  }

}
