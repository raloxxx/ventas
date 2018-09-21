import { RouterModule, Routes } from '@angular/router';



import { ClientComponent } from './pages/client/client.component';
import { ClientDetailComponent } from './pages/client/client-detail.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    
    { path: 'client', component: ClientComponent},
    { path: 'client-detail', component: ClientDetailComponent},
    { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );