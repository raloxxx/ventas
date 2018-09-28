import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';


import { WidgetsModule } from '../widgets/widgets.module';


import { ClientComponent } from './client/client.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { ClientDetailComponent } from './client/client-detail.component';
import { SaveZoneComponent } from './zone/save-zone.component';
import { SaveClientComponent } from './client/save-client.component';
import { ZoneComponent } from './zone/zone.component';
import { ProductComponent } from './product/product.component';
import { SaveProductComponent } from './product/save-product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { SaleComponent } from './ventas/sale.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaveSaleComponent } from './ventas/save-sale.component';


@NgModule({
  declarations: [
    ClientComponent,
    NopagefoundComponent,
    ClientDetailComponent,
    SaveZoneComponent,
    SaveClientComponent,
    ZoneComponent,
    ProductComponent,
    SaveProductComponent,
    ProductDetailComponent,
    SaleComponent,
    DashboardComponent,
    SaveSaleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WidgetsModule,
    PAGES_ROUTES
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
