import { RouterModule, Routes } from '@angular/router';
import { SaveZoneComponent } from './zone/save-zone.component';
import { SaveClientComponent } from './client/save-client.component';
import { ClientDetailComponent } from './client/client-detail.component';
import { ClientComponent } from './client/client.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const pagesRoutes: Routes = [
    { path: 'client', component: ClientComponent},
    { path: 'client-detail', component: ClientDetailComponent},
    { path: 'save-client', component: SaveClientComponent},
    { path: 'save-zone', component: SaveZoneComponent},


    //{ path: '', component: ClientComponent},
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    { path: '**', component: NopagefoundComponent}
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );