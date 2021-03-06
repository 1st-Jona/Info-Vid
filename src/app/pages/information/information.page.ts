import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  openNews(){
    this.router.navigate(['/noticias']);
  }

  openSintomas(){
    this.router.navigate(['/sintomas']);
  }

  openRecomendaciones(){
    this.router.navigate(['/recomendaciones']);
  }

  
  openSobreCovid(){
    this.router.navigate(['/sobre-covid']);
  }
  openCentrosAtencion(){
    this.router.navigate(['/centros-atencion']);
  }
}
