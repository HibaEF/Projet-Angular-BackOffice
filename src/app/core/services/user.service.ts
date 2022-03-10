import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Role} from "../model/Role";
import {RoleUser} from "../model/UserModels/RoleUser";
import {UserRole} from "../model/UserRole";
import {ModelUser} from "../model/UserModels/ModelUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*list: User[]=
    [
      {
        id: 1,
        firstName: "Mila",
        lastName: " Kunis",
        birthDate: "30-06-1999",
        accountCategory: "Admin",
        email: "test@gmail.com",
        password: "testtest10",
        picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
        profession: "Software Engineer"
      },
      {
        id: 2,
        firstName: "George",
        lastName: "Clooney",
        birthDate: "10-02-1981",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
        profession: "Software Engineer"
      },
      {
        id: 3,
        firstName: "George",
        lastName:  "Clooney",
        birthDate: "10-02-1981",
        accountCategory: "Customer",
        email: "marlon@brando.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
        profession: "Software Engineer"
      },
      {
        id: 4,
        firstName: "Ryan",
        lastName:  "Gossling",
        birthDate: "05-03-1987",
        accountCategory: "Golden",
        email: "Ryan@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
        profession: "Software Engineer"
      },
      {
        id: 4,
        firstName: "Robert",
        lastName:  "Downey",
        birthDate: "05-03-2002",
        accountCategory: "Blocked Account",
        email: "robert@nicholson.com",
        password: "test",
        picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
        profession: "Software Engineer"
      },
      { id: 12,
        firstName: "Ahmed",
        lastName:"ben Foulen",
        accountCategory:"Admin",
        birthDate: "10-10-1988",
        email: "ahmed@gmail.com",
        password:"test",
        profession:"Teacher",
        picture:"https://bootdey.com/img/Content/avatar/avatar5.png"},

      {id: 13,
        firstName: "Amina",
        lastName:"ben Foulen",
        accountCategory:"Customer",
        birthDate: "10-10-1988",
        email: "ahmed@gmail.com",
        password:"test",
        profession:"Teacher",
        picture:"https://bootdey.com/img/Content/avatar/avatar5.png"}
    ];*/

  url="http://localhost:8090/SpringMVC/user/";
  constructor(private http:HttpClient) { }
  getListUserService(){
    return this.http.get<User[]>(this.url+'retrive-all-users');
  }
  addUserService(user:User){
    return this.http.post(this.url+'add-user',user);
  }
  addAdminUserService(user:User){
    return this.http.post(this.url+'add-admin-user',user);
  }
  addSimpleUserService(user:User){
    return this.http.post(this.url+'add-simple-user',user);
  }
  deleteUserService(id:number){
    return this.http.delete(this.url+'remove-user/'+id);
  }
  getUserServiceById(id:any){
    return this.http.get<User>(this.url+'retrive-user/'+id);
  }
  updateUserService(user:User){
    console.log(user);
    return this.http.put(this.url+"modify-user",user);
  }
  changeRoleUser(user:User,role:string){
    let roleUser=new RoleUser();
    roleUser.Role=role;
    roleUser.idUser=user.idUser;
    return this.http.post(this.url+"change-role-user",roleUser);
  }
  VerifyEmail(email:string){
    return this.http.get<boolean>(this.url+'email-exists?email='+email);
  }

  /*==========================================Authentication========================================*/

  authenticate(modelUser:ModelUser){
    return this.http.post<User>(this.url+'authenticate-user',modelUser);
  }
  verifyPassword(modelUser:ModelUser){
    return this.http.post<boolean>(this.url+'verify-password-user',modelUser);
  }
  resetPassword(modelUser:ModelUser){
    return this.http.post(this.url+'reset-password-user',modelUser);
  }

/*  updateUserService1(user:UserRole){
    console.log(user);
    return this.http.post(this.url+"modify-user-1",user);
  }*/
}
