import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductRoutingModule} from "./app-product/app-product-routing.module";
import { NotFoundComponent} from "./app-shared/not-found/not-found.component";
import { MainProviderComponent } from './app-provider/main-provider/main-provider.component';
import {UserRoutingModule} from "./user/user-routing.module";
import {LivreurRoutingModule} from "./app-livreur/livreur-routing.module";
import {LandingPageRoutingModule} from "./landing-page/landing-page-routing.module";

import { MainLivreurComponent } from './app-livreur/main-livreur/main-livreur.component';
import { FormLivreurComponent } from './app-livreur/form-livreur/form-livreur.component';




import { AppProviderRoutingModule } from './app-provider/app-provider-routing.module';
import { AppStockRoutingModule } from './app-stock/app-stock-routing.module';
import { MainStockComponent } from './app-stock/main-stock/main-stock.component';
import { AppLivraisonRoutingModule } from './app-livraison/app-livraison-routing.module';
import { CartRoutingModule } from './app-cart/app-cart-routing.module';
import { FactureRoutingModule } from './app-facture/app-facture-routing.module';

const routes: Routes = [
  {path: '',redirectTo:'main-dashboard', pathMatch: 'full' },
  {path: 'provider',component: MainProviderComponent },
  {path: 'stock',component: MainStockComponent },
  {path: '**',component: NotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppProductRoutingModule,
    AppProviderRoutingModule,
    AppStockRoutingModule,
    UserRoutingModule,
    LivreurRoutingModule,
    LandingPageRoutingModule,
    AppLivraisonRoutingModule,
    CartRoutingModule,
    FactureRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
