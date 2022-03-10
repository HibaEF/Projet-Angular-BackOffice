import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-admin-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  user:User=new User();
  status_add:string="";
  test_email:string="";
  constructor(private userService : UserService,private router: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      (params)=> {
        this.status_add= params.get('add');
      }
    )
  }

  save_Admin(){
    this.user.categorieUser='CAT_ADM';
    this.user.profession='PROF_ADM';
    this.userService.addAdminUserService(this.user).subscribe(
      ()=>this.router.navigate(['/show-all-user'])
    )
  }
  save_Simple(){
    this.user.categorieUser='Ordianire';
    this.userService.addSimpleUserService(this.user).subscribe(
      ()=>this.router.navigate(['/login'])
    )
  }
  return(){
    this.router.navigate(['/show-all-user']);
  }
  TestEmail(email:string){
    this.userService.VerifyEmail(email).subscribe(
      (data:boolean)=>{
    if (data==true){
      this.test_email="existe";
    }else {
      this.test_email="existe pas";
    }
      }
    )
  }
}
