import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsProductComponent } from './stats-product/stats-product.component';
import { ChartsModule } from 'ng2-charts';
import { StatsAllProductComponent } from './stats-all-product/stats-all-product.component';
import { StatsSalesComponent } from './stats-sales/stats-sales.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
    StatsProductComponent,
    StatsAllProductComponent,
    StatsSalesComponent,
    BreadcrumbsComponent
  ],
  exports: [
    StatsProductComponent,
    StatsAllProductComponent,
    StatsSalesComponent,
    BreadcrumbsComponent
  ]
})
export class WidgetsModule { }
