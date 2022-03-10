import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRole} from "../../core/model/UserRole";

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  user: User=new User();
  //modelUSer:UserRole=new UserRole();
  ancien_email:string="";
  test_email:string="";
  constructor(private userService : UserService,private router: Router,private activated:ActivatedRoute) {  }

  ngOnInit(): void {
    //this.status=this.userService.status;
      this.activated.paramMap.subscribe(
        (params)=> {
          let id = params.get('id');
          this.userService.getUserServiceById(id).subscribe(
            (data) => {this.user = data;
                   this.ancien_email=this.user.email;}
          )
        }
      )
  }
  save(){
      this.userService.updateUserService(this.user).subscribe(
        ()=>
        {
          if (this.user.idUser==Number(localStorage.getItem('loggedUserid'))){
            localStorage.setItem('loggedUserFirstName',this.user.nom);
            localStorage.setItem('loggedUserLastName',this.user.prenom);
            location.reload();
            location.assign('/Dashbord');
          }else {
            this.router.navigate(['/show-all-user']);
          }
        }
      )
    }

  TestEmail(email:string){
    if (this.ancien_email!=email){
    this.userService.VerifyEmail(email).subscribe(
      (data:boolean)=>{
        if (data==true){
          this.test_email="existe";
        }else {
          this.test_email="existe pas";
        }
      }
    )
  }}

  return(){
    if (this.user.idUser==Number(localStorage.getItem('loggedUserid'))){
      this.router.navigate(['/Dashbord']);
    }else {
      this.router.navigate(['/show-all-user']);
    }
  }

}
