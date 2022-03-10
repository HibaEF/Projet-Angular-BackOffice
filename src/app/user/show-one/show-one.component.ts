import { Component, OnInit,Input} from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {
  constructor(private userService: UserService,private router: Router,private activated:ActivatedRoute) { }
  user:User=new User();
  role:string="";
  ngOnInit(): void {
    //this.user=this.userService.CurrentUser;
    this.role=localStorage.getItem('loggedUserRole');
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.userService.getUserServiceById(id).subscribe(
          (data) => this.user = data
        )
      }
    )
  }
  fixUser(){
    if (this.user.idUser==Number(localStorage.getItem('loggedUserid'))){
      this.router.navigate(['/Dashbord']);
    }else {
      this.router.navigate(['/show-all-user']);
    }
  }
}
