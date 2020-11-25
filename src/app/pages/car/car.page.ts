import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage  {
  carCost = 0;
  carCount = 0;

  car: Product[] = new Array();
  constructor(private productService: ProductService) {

    this.getAllCar();
    this.getCarInfo();
  }
  getAllCar(): void{
    this.car = this.productService.getCar();
  }
  getCarInfo(){
    this.carCost = this.productService.getCarCost();
    this.carCount = this.productService.getCarCount();
  }
}
