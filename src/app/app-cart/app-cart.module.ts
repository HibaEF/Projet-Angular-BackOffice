import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartRoutingModule } from './app-cart-routing.module';
import { ProductTestComponent } from './product-test/product-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailTestComponent } from './product-detail-test/product-detail-test.component';



@NgModule({
  declarations: [
    CartComponent,
    ProductTestComponent,
    ProductDetailTestComponent,
    ProductDetailTestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CartRoutingModule,
    FormsModule ,
    ReactiveFormsModule     
  ]

})
export class AppCartModule { }
