import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MainProviderComponent } from './main-provider/main-provider.component';
import { FormAddProviderComponent } from './form-add-provider/form-add-provider.component';
import { ShowOneProviderComponent } from './show-one-provider/show-one-provider.component';

  const routes: Routes = [
    {path:'show-all-provider', component: MainProviderComponent},
    {path:'show-provider', component: ShowOneProviderComponent},
    {path:'add-provider', component:FormAddProviderComponent},
    {path:'update-provider', component:FormAddProviderComponent},
    
    {path:'provider/:id', component: ShowOneProviderComponent},
  
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppProviderRoutingModule { }
  