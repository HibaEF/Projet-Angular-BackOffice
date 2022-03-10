import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainProductComponent} from "./main-product/main-product.component";
import { AppProductRoutingModule } from './app-product-routing.module';
import { ProductComponent } from './product/product.component';
import { FormProductComponent } from './form-product/form-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShowAllProductComponent } from './show-all-product/show-all-product.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    MainProductComponent,
    ProductComponent,
    FormProductComponent,
    ShowAllProductComponent,
    ShowOneProductComponent
  ],
    imports: [
        CommonModule,
        AppProductRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
    ]
})
export class AppProductModule { }
