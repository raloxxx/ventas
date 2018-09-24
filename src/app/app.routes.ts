import { RouterModule, Routes } from '@angular/router';



import { ClientComponent } from './pages/client/client.component';
import { ClientDetailComponent } from './pages/client/client-detail.component';

import { SaveZoneComponent } from './pages/zone/save-zone.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    
    { path: 'client', component: ClientComponent},
    { path: 'client-detail', component: ClientDetailComponent},


    { path: 'save-zone', component: SaveZoneComponent},
    { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );