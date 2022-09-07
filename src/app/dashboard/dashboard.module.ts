import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarCardComponent } from './components/car-card/car-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CarsListComponent,
    CarCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
