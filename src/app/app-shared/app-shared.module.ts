import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AppSharedModule { }
