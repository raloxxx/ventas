import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { 
        ClientService, 
        ZoneService, 
        ProductService
} from './service.index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ClientService,
    ZoneService,
    ProductService
  ]
})
export class ServicesModule { }
