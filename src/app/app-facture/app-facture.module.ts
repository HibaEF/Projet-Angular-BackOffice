import { NgModule,ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeFactureComponent } from './liste-facture/liste-facture.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { FactureRoutingModule } from './app-facture-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ChartModule } from 'angular2-chartjs';
import { ChildFactureComponent } from './child-facture/child-facture.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    ListeFactureComponent,
    DetailFactureComponent,
    MainDashboardComponent,
    ChildFactureComponent,
    UpdateFactureComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    FactureRoutingModule,
    ReactiveFormsModule,
    ChartModule ,
    Ng2SearchPipeModule

  ]
})
export class AppFactureModule { }
