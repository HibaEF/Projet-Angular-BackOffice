import {Role} from "./Role";
import {User} from "./user";

export class UserRole{
  idUser: number;
  nom: string;
  prenom: string;
  dateNaissance: any;
  email: string;
  password: string;
  facture:any[];
  avisUser:any[];
  categorieUser:string;
  profession: string;
  phoneNumber:number;
  picture:string;
  adresse:string;
  role:string;


  AssignUserToModel(user:User):void {
    this.idUser = user.idUser;
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.dateNaissance = user.dateNaissance;
    this.email = user.email;
    this.password = user.password;
    this.facture = user.facture;
    this.avisUser = user.avisUser;
    this.categorieUser = user.categorieUser;
    this.profession = user.profession;
    this.phoneNumber = user.phoneNumber;
    this.picture = user.picture;
    this.adresse = user.adresse;
    this.role = user.role[0].role;
  }
}
