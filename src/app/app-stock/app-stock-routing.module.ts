import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MainStockComponent } from './main-stock/main-stock.component';
import { ShowOneStockComponent } from './show-one-stock/show-one-stock.component';
import { FormAddStockComponent } from './form-add-stock/form-add-stock.component';
import { ProStockComponent } from './pro-stock/pro-stock.component';
  const routes: Routes = [
    {path:'show-all-stock', component: MainStockComponent},
    {path:'show-stock', component: ShowOneStockComponent},
    {path:'add-stock', component:FormAddStockComponent},
    {path:'stock/:id', component: ShowOneStockComponent},
    {path:'stock-ref/:ref', component: ProStockComponent},
    
    
  
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  

  export class AppStockRoutingModule { }
  