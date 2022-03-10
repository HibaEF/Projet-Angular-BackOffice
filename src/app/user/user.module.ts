import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFormComponent } from './update-form/update-form.component';
import {UserRoutingModule} from "./user-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShowAllComponent } from './show-all/show-all.component';
import {BrowserModule} from "@angular/platform-browser";
import { ShowOneComponent } from './show-one/show-one.component';
import { ShowComponent } from './show/show.component';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [
    UpdateFormComponent,
    ShowAllComponent,
    ShowOneComponent,
    ShowComponent,
    AddUserFormComponent,
    LoginFormComponent,
    ResetPasswordFormComponent,

  ],
    imports: [
        BrowserModule,
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
    ]
})
export class UserModule { }
