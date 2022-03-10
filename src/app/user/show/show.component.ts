import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";
import swal from "sweetalert";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  searchText:any;
@Output()DeleteEvent=new EventEmitter<User>();
@Input()listOfUsers:User[];
@Input()role:string;
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  delete(user:User){
   /* let i =this.listOfUsers.indexOf(user);
    this.userService.deleteUserService(user.idUser).subscribe(
      ()=>this.listOfUsers.splice(i,1)
    )*/
    this.DeleteEvent.emit(user);
  }

 /* Block_UnBlock(user:User,role:string){
    let id : number;
    if (role=="SIMPLE"){
      id=2;
    }else if (role=="BLOCKED") {
      id=3;
    }
    let i = this.listOfUsers.indexOf(user);
    user.role[0].id=id;
    user.role[0].role=role;
    this.userService.changeRoleUser(user,role).subscribe(
      ()=>this.listOfUsers[i]=user
    )
  }*/
  Block_UnBlock(user:User,role:string) {
    let id: number;
    let roleUser:string;
    if (role == "SIMPLE") {
      id = 2;
      roleUser='Unblock';
    } else if (role == "BLOCKED") {
      id = 3;
      roleUser='block';
    }

    swal({
      title: "Are you sure?",
      text: "Are you sure that you wanna "+roleUser+" this user",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true,
    })
      .then((willBlock_Unblock) => {

        if (willBlock_Unblock) {
          let i = this.listOfUsers.indexOf(user);
          user.role[0].id = id;
          user.role[0].role = role;
          this.userService.changeRoleUser(user, role).subscribe(
            () => this.listOfUsers[i] = user
          );
          swal("User has been "+roleUser+"ed", {
            icon: "success",
          });
        } else {
          swal("User  is safe!");
        }
      });
  }

}
