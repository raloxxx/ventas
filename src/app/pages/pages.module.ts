import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClientComponent } from './client/client.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { ClientDetailComponent } from './client/client-detail.component';
import { SaveZoneComponent } from './zone/save-zone.component';
import { SaveClientComponent } from './client/save-client.component';


@NgModule({
  declarations: [
    ClientComponent,
    NopagefoundComponent,
    ClientDetailComponent,
    SaveZoneComponent,
    SaveClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
