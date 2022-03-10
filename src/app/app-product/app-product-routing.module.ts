import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainProductComponent} from "./main-product/main-product.component";
import {FormProductComponent} from "./form-product/form-product.component";
import {ShowAllProductComponent} from "./show-all-product/show-all-product.component";
import {ShowOneComponent} from "../user/show-one/show-one.component";
import {ShowOneProductComponent} from "./show-one-product/show-one-product.component";
import {ProductComponent} from "./product/product.component";
const routes: Routes = [

  {path: 'product', component: ShowAllProductComponent},
  {path:'add-product', component: FormProductComponent},
  {path:'product/:id', component: ShowOneProductComponent},
  {path: 'productUser' , component: MainProductComponent},
  {path:'modifier_produit',component: FormProductComponent},
  {path:'produit',component: ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppProductRoutingModule { }
