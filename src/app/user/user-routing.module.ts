import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateFormComponent} from "./update-form/update-form.component";
import {ShowAllComponent} from "./show-all/show-all.component";
import {ShowOneComponent} from "./show-one/show-one.component";
import {AddUserFormComponent} from "./add-user-form/add-user-form.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {ResetPasswordFormComponent} from "./reset-password-form/reset-password-form.component";
import {IsAuthenticatedGuard} from "../is-authenticated.guard";

function AuthGuard() {
  return true;
}

function NoAdminGuard() {
  return true;
}

const routes: Routes = [
  {path:'show-all-user', component: ShowAllComponent,canActivate:[IsAuthenticatedGuard]},
  {path:'login', component: LoginFormComponent},
  {path:'add-user/:add', component: AddUserFormComponent},
  {path:'update-user/:id', component: UpdateFormComponent,canActivate:[IsAuthenticatedGuard]},
  {path:'reset-password/:id', component: ResetPasswordFormComponent,canActivate:[IsAuthenticatedGuard]},
  {path:'user/:id', component: ShowOneComponent,canActivate:[IsAuthenticatedGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
