import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLivraisonComponent } from './main-livraison/main-livraison.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppLivraisonRoutingModule } from './app-livraison-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormLivraisonComponent } from './form-livraison/form-livraison.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    FormLivraisonComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2SearchPipeModule

    ]
})
export class AppLivraisonModule { }
