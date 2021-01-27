import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = new Array();
  private car: Product[] = new Array();
  constructor() {
      this.products.push({
        photo: 'https://resources.claroshop.com/medios-plazavip/s2/10180/1473738/5ef2e5f7d60e7-1_cubrebocas-50-piezas-tricapa-1600x1600.jpg',
        name: 'Cubre Bocas Clínico',
        description: 'Cubrebocas clínico con filtro',
        cost: 10
      });

      this.products.push({
        photo: 'https://www.chedraui.com.mx/medias/7501199425221-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8MTI0MjYyfGltYWdlL2pwZWd8aDQyL2hmMC8xMDU4MjM5ODgyODU3NC5qcGd8ZWFlMGEwMGM5NTdjYzU3ZTA4NmVkYTU1NGYzNjExYjczNGI1MzI1NzJhMjg1ZWE4ZGYyYzZlODI5ZmE3ODJhYw',
        name: 'Gel antibacterial Dial',
        description: 'Gel Dial 500 ml',
        cost: 30
      });

      this.products.push({
        photo: 'https://www.chedraui.com.mx/medias/7501058752796-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8NjQ3OTh8aW1hZ2UvanBlZ3xoYjQvaDc4LzEwNTk1NTM5NTgzMDA2LmpwZ3w3YWJlZDVjN2UyMmE1ZjFiOThmYjU0MWEwMGMzMWEzNjcxMTBiYmFkOGQ2ZDUzZTgyYzllYWQ4MWM0ZDA3YTdj',
        name: 'Desinfectante Lysol',
        description: 'Desinfectante Lysol 475 ml',
        cost: 50
      });

      this.products.push({
        photo: 'https://www.superama.com.mx/Content/images/products/img_large/0750112510434L.jpg',
        name: 'Electrolit',
        description: 'Elctrolit de 625 ml',
        cost: 20
      });

   }

   getProducts(): Product[] { 
    return this.products;
  }
  addToCar(pos: number){
    this.car.push(this.products[pos]);
  }
  getCar(){
    return this.car;
  }
  getCarCost(): number{
    let carCost = 0;
    for (let i = 0; i < this.car.length; i++){
      carCost += this.car[i].cost;
    }
    return carCost;
  }
  getCarCount(): number{
      return this.car.length;
  }

}
