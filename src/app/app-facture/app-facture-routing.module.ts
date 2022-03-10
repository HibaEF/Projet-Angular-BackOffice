import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { ListeFactureComponent } from './liste-facture/liste-facture.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';


const routes: Routes = [
  {path: 'liste-facture',component:ListeFactureComponent},
  {path: 'liste-facture/:id',component:DetailFactureComponent},
  {path: 'main-dashboard',component:MainDashboardComponent},
  {path: 'update-facture/:id',component:UpdateFactureComponent},
  
  
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class FactureRoutingModule { }
  