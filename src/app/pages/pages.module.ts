import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharedModule } from '../chared/chared.module';
import { AppRoutingModule } from '../app-routing.module';

import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';




@NgModule({
  declarations: [
    Grafica1Component,
    ProgressComponent,
    DashboardComponent,
    PagesComponent
  ],
  exports: [
    Grafica1Component,
    ProgressComponent,
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    CharedModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
