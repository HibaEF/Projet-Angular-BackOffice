import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainProviderComponent} from "../app-provider/main-provider/main-provider.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: 'Dashbord',component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
