import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignLivraisonComponent } from './assign-livraison/assign-livraison.component';
import { ChildLivreurComponent } from './child-livreur/child-livreur.component';
import { FormLivreurComponent } from './form-livreur/form-livreur.component';
import { HiringLivreurComponent } from './hiring-livreur/hiring-livreur.component';
import { LivreurComponent } from './livreur/livreur.component';
import { MainLivreurComponent } from './main-livreur/main-livreur.component';

//Aa
//bb
@NgModule({
  declarations: [
    AssignLivraisonComponent,
    ChildLivreurComponent,
    FormLivreurComponent,
    HiringLivreurComponent,
    LivreurComponent,
    MainLivreurComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LivreurModule { }
