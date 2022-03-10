import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppProductModule} from "./app-product/app-product.module";
import {AppSharedModule} from "./app-shared/app-shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SidenavComponent } from './app-shared/sidenav/sidenav.component';
import { TopnavComponent } from './app-shared/topnav/topnav.component';
import { MainProviderComponent } from './app-provider/main-provider/main-provider.component';
import { FormAddProviderComponent } from './app-provider/form-add-provider/form-add-provider.component';
import { MainStockComponent } from './app-stock/main-stock/main-stock.component';
import { FormAddStockComponent } from './app-stock/form-add-stock/form-add-stock.component';
import {UserModule} from "./user/user.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import { CommonModule } from '@angular/common';
import { LivreurComponent } from './app-livreur/livreur/livreur.component';
import { MainLivreurComponent } from './app-livreur/main-livreur/main-livreur.component';
import { FormLivreurComponent } from './app-livreur/form-livreur/form-livreur.component';
import { AppLivraisonRoutingModule } from './app-livraison/app-livraison-routing.module';

import { FormLivraisonComponent } from './app-livraison/form-livraison/form-livraison.component';



import { MainLivraisonComponent } from './app-livraison/main-livraison/main-livraison.component';
import { AppLivraisonModule } from './app-livraison/app-livraison.module';
import { AppCartModule } from './app-cart/app-cart.module';
import { AppFactureModule } from './app-facture/app-facture.module';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AssignLivraisonComponent } from './app-livreur/assign-livraison/assign-livraison.component';
import { HiringLivreurComponent } from './app-livreur/hiring-livreur/hiring-livreur.component';
import { ChildLivreurComponent } from './app-livreur/child-livreur/child-livreur.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    MainProviderComponent,
    FormAddProviderComponent,
    MainStockComponent,
    FormAddStockComponent,
    LivreurComponent,
    MainLivreurComponent,
    FormLivreurComponent,

    MainLivraisonComponent,
    AssignLivraisonComponent,
    HiringLivreurComponent,
    ChildLivreurComponent 
  
  


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppProductModule,
    AppSharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    LandingPageModule,

    AppLivraisonModule,
    AppCartModule ,

    AppFactureModule ,
    Ng2SearchPipeModule
    
    
   



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
