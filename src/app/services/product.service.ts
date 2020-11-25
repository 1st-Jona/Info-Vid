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
        photo: 'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/889842640762_2.jpg',
        name: 'Xbox Series X',
        description: 'Consola de Microsoft Xbox Series X 1TB.',
        cost: 13500
      });

      this.products.push({
        photo: 'https://s.alicdn.com/@sc01/kf/H5437a807293e48d9b3ae3463849d5b66u.jpg_300x300.jpg',
        name: 'PlayStation 5',
        description: 'Consola de Sony PS5 1TB.',
        cost: 14500
      });

      this.products.push({
        photo: 'https://http2.mlstatic.com/D_NQ_NP_939588-MLA41153364520_032020-O.jpg',
        name: 'Nintendo Switch Lite',
        description: 'Consola portátil Nintendo Switch Lite 32 GB.',
        cost: 8500
      });

      this.products.push({
        photo: 'https://www.soriana.com/medias/sys_master/images/images/hab/h7d/9085896491038.jpg',
        name: 'Smart TV Samsung',
        description: 'Pantalla smart TV 4k UHD LED marca Samsung de 43 pulgadas.',
        cost: 10000
      });

      this.products.push({
        photo: 'https://target.scene7.com/is/image/Target/GUEST_7c6bdc74-fa86-4687-9c79-17e475b96be3?wid=488&hei=488&fmt=pjpeg',
        name: 'Amazon Echo Dot',
        description: 'Asistente de Alexa Amazon Echo Dot de 4ta generación.',
        cost: 750
      });

      this.products.push({
        photo: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:good/mg/gm/3pp/asr/039d2fbc-6939-4efa-b33e-8e931d0f48d1_1.6d1667b75b6b556a14d9bf88458cc717.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
        name: 'Sonos One SL',
        description: 'Bocina inteligente para música marca Sonos.',
        cost: 3000
      });

      this.products.push({
        photo: 'https://media.kingston.com/hyperx/product/hx-product-headset-cloud-flight-s-hxhscfssgww-1-zm-lg.jpg',
        name: 'HyperX Cloud Fight S',
        description: 'Audífonos para gaming marca HyperX con sonido Dolby Digital Surround.',
        cost: 4750
      });

      this.products.push({
        photo: 'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7503024407990_3.jpg',
        name: 'Paquete Stephen King 2018',
          description: 'Colección de novelas del autor Stephen King. 7 libros incluidos.',
        cost: 1200
      });

      this.products.push({
        photo: 'https://deskcom.com.mx/wp-content/uploads/2018/06/Untitled-2.png',
        name: 'Dell Latitude 3470',
        description: 'Laptop Dell Latitude 3 con 1TB de DD y 256 GB en SSD, intel core i5 de 9na Generación.',
        cost: 13500
      });

      this.products.push({
        photo: 'https://www.caseking.de/media/image/gcas-398_gcas_398_01.jpg',
        name: 'Nvidia Geforce RTX 3090',
        description: 'Tarjeta de video Nvidia  Geforce RTX 3090 marca ASUS TUF Gaming con soporte Ray Traicing.',
        cost: 14500
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
