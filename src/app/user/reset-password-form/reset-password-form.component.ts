import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ModelUser} from "../../core/model/UserModels/ModelUser";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {
  OldPassword:string;
  NewPassword:string;
  modelUser:ModelUser=new ModelUser();
  msg:string="";
  verifPass:boolean=false;
  constructor(private userService: UserService,private router: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
  }

  Reset(){
    this.modelUser.email=localStorage.getItem('loggedUserEmail');
    this.modelUser.password=this.OldPassword;
    this.userService.verifyPassword(this.modelUser).subscribe(
      (data:boolean)=>{
        this.verifPass=data;
        console.log(data)
        if (this.verifPass==true){
          console.log('aaaa');
          this.modelUser.password=this.NewPassword;
          this.userService.resetPassword(this.modelUser).subscribe(
            ()=>{
              localStorage.removeItem('loggedUserid');
              localStorage.removeItem('loggedUserFirstName');
              localStorage.removeItem('loggedUserLastName');
              localStorage.removeItem('loggedUserRole');
              localStorage.removeItem('loggedUserEmail');
              localStorage.setItem('isloggedIn','Notactive');
              location.reload();
              location.assign('/login');
            }
          )
        }else{
          this.msg="old password provided is wrong";
        }
      }
    )
  }
}
