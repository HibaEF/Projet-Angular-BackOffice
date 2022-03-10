
import {HttpClientModule} from "@angular/common/http";
import { AppStockRoutingModule } from "./app-stock-routing.module";


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { MainStockComponent } from "./main-stock/main-stock.component";
import { FormAddStockComponent} from './form-add-stock/form-add-stock.component'
import { ShowOneStockComponent } from "./show-one-stock/show-one-stock.component";
import { ProStockComponent } from './pro-stock/pro-stock.component';

@NgModule({
    declarations: [
     
      MainStockComponent,
      FormAddStockComponent,
      ShowOneStockComponent,
      ProStockComponent,
      
    ],
    imports: [
      CommonModule,
      BrowserModule,
      AppStockRoutingModule,
      FormsModule,
      ReactiveFormsModule,
        HttpClientModule
      ]
    })
    export class AppStockModule { }
    
        