import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/model/user";
import {Router} from "@angular/router";
import {Role} from "../../core/model/Role";
import swal from "sweetalert";


@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  list: User[]=[];
  new_list:User[]=[];
  role:string='All Users';
  roleUsers:Role[]=[];
  constructor(private userService: UserService,private router: Router) { }
  ngOnInit(): void {
    this.userService.getListUserService().subscribe(
      (data:User[])=>[this.list=data,this.new_list=data]
    )
  }
/*  delete(user:User){
    let i =this.list.indexOf(user);
    this.userService.deleteUserService(user.idUser).subscribe(
      ()=>this.list.splice(i,1)
    )
  }*/

 /* update(user:User){
    //this.stauts='update';
    localStorage.setItem('statusUpdateUser','update');
    localStorage.setItem('IdUser',String(user.idUser))
    //this.userService.UpdateUSer(user);
    this.router.navigate(['/add-user/']);
  }*/

  TargetSimpleUser(){
    this.role='Simple Users';
    this.new_list=this.list.filter(user=>user.role[0].role=='SIMPLE'||user.role[0].role==='BLOCKED');
  }
  TargetAdminUser(){
    this.role='Admin Users';
    this.new_list=this.list.filter(user=>user.role[0].role=='ADMIN');
  }
  TargetAll(){
    this.role='All Users';
    this.new_list=this.list;
  }
 /* delete(user:User){
    let i =this.list.indexOf(user);
    let j=this.new_list.indexOf(user);
    this.userService.deleteUserService(user.idUser).subscribe(
      ()=>{this.list.splice(i,1)
                this.new_list.splice(j,1);
      }
    )
    //this.DeleteEvent.emit(user);
  }*/
  delete(user:User){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.list.indexOf(user);
          this.userService.deleteUserService(user.idUser).subscribe(
            ()=>this.list.splice(i,1)
          );
          swal("User has been deleted!", {
            icon: "success",
          });
        } else {
          swal("User  is safe!");
        }
      });}
}
