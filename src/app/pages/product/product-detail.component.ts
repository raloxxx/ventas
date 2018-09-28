import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/service.index';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {

  fecha = '';

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public _productService: ProductService
  ) {
  
  }

  ngOnInit() {

    let date = new Date();
    
    this.fecha = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    console.log("la fecha", this.fecha);



    this.activatedRoute.params.subscribe( params => {

      let id = params['id'];
      
      this._productService.cargarProducto(id).toPromise()
          .then( resp => {
            console.log(resp)
          }

        );
    });
  }

}
