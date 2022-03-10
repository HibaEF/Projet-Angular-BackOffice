import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignLivraisonComponent } from './assign-livraison/assign-livraison.component';
import { FormLivreurComponent } from './form-livreur/form-livreur.component';
import { HiringLivreurComponent } from './hiring-livreur/hiring-livreur.component';
import { LivreurComponent } from './livreur/livreur.component';
import { MainLivreurComponent } from './main-livreur/main-livreur.component';

const routes: Routes = [
  {path:'add-livreur', component: FormLivreurComponent},
  {path:'retrieve-all-livreurs', component: MainLivreurComponent},
  {path:'livreur/:id', component: LivreurComponent},
  {path:'assign-livraison/:id', component: AssignLivraisonComponent},
  {path:'livreur', component: MainLivreurComponent},
  {path:'recruter', component: HiringLivreurComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LivreurRoutingModule { }
