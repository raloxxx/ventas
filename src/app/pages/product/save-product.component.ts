import { Component, OnInit } from '@angular/core';


import { Product } from '../../models/product.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/service.index';

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: []
})
export class SaveProductComponent implements OnInit {

  producto = new Product('', '', '', '', '');

  constructor( public _productService: ProductService ) { }
  
  ngOnInit() {
  }

  guardarProducto(f: NgForm){
    
    this._productService.guardarProducto(this.producto).subscribe(
         resp => {
            console.log(resp);
          }
        )

  }

}
