import { RouterModule, Routes } from '@angular/router';




import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );