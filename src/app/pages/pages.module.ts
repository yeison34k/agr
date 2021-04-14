import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharedModule } from '../chared/chared.module';
import { AppRoutingModule } from '../app-routing.module';

import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from '../component/component.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';





@NgModule({
  declarations: [
    Grafica1Component,
    ProgressComponent,
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent
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
    FormsModule,
    ComponentModule,  
  ]
})
export class PagesModule { }
