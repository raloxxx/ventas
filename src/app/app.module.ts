import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { ClientComponent } from './pages/client/client.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';


import { ServicesModule } from './services/services.module';
import { ClientDetailComponent } from './pages/client/client-detail.component';
import { SaveZoneComponent } from './pages/zone/save-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NopagefoundComponent,
    ClientDetailComponent,
    SaveZoneComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ServicesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
