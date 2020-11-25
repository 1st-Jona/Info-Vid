import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage  {

  products: Product[] = new Array();

  constructor(private productService: ProductService,private alert: AlertController, public toastController: ToastController) {
    this.getAll();
  }

  getAll(): void{
    this.products = this.productService.getProducts();
  }
  addProductToCar(position: number){
      this.productService.addToCar(position);
    }

  async showAlert(pos: number){
      const al = await this.alert.create({
        header: 'Confirmar',
        message: '¿Desea agregar este producto al carrito de compras?',
        buttons: [{text: 'No'},
        {text: 'Sí', handler: () => {
            this.productService.addToCar(pos);
            this.presentToast();
          }
        }]
      });
      await al.present();
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Producto agregado al carrito de compras.',
        duration: 2000
      });
      toast.present();
    }

}
