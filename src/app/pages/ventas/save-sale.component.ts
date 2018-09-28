import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/service.index';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-save-sale',
  templateUrl: './save-sale.component.html',
  styles: []
})
export class SaveSaleComponent implements OnInit {

  productos: Product[] = [];


  producto = new Product('', '', '', '', '');

  constructor( public _productService: ProductService ) { }

  ngOnInit() {

    this.cargarProductos();
  }

  cargarProductos(){

    this._productService.cargarProductos().toPromise()
        .then(resp => {
          console.log("no llega", resp);
          this.productos = resp.productos;
        });
  }

  getProducto( id ){
    console.log(id);
  }

}
