import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CharedModule { }
