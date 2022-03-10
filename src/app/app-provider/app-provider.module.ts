
import {HttpClientModule} from "@angular/common/http";

import { AppProviderRoutingModule } from './app-provider-routing.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { MainProviderComponent } from './main-provider/main-provider.component';
import { FormAddProviderComponent } from './form-add-provider/form-add-provider.component';
import { ShowOneProviderComponent } from './show-one-provider/show-one-provider.component';

@NgModule({
    declarations: [
     
      MainProviderComponent,
      FormAddProviderComponent,
      ShowOneProviderComponent,
      
    ],
    imports: [
      CommonModule,
      BrowserModule,
      AppProviderRoutingModule,
      FormsModule,
      ReactiveFormsModule,
        HttpClientModule
      ]
    })
    export class AppProviderModule { }
    
        