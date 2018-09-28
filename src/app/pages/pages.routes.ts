import { RouterModule, Routes } from '@angular/router';
import { SaveZoneComponent } from './zone/save-zone.component';
import { SaveClientComponent } from './client/save-client.component';
import { ClientDetailComponent } from './client/client-detail.component';
import { ClientComponent } from './client/client.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ZoneComponent } from './zone/zone.component';
import { ProductComponent } from './product/product.component';
import { SaveProductComponent } from './product/save-product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { SaleComponent } from './ventas/sale.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaveSaleComponent } from './ventas/save-sale.component';



const pagesRoutes: Routes = [
    { path: 'client', component: ClientComponent },
    { path: 'client-detail', component: ClientDetailComponent },
    { path: 'save-client', component: SaveClientComponent },

    { path: 'product', component: ProductComponent },
    { path: 'save-product', component: SaveProductComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent},

    { path: 'sale', component:  SaleComponent},
    { path: 'save-sale', component:  SaveSaleComponent},

    { path: 'zone', component: ZoneComponent },
    { path: 'save-zone', component: SaveZoneComponent },


    { path: '', component: DashboardComponent},
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );