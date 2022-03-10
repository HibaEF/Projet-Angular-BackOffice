import {Facture} from "./Facture";
import {Role} from "./Role";

export class User{
  idUser: number;
  nom: string;
  prenom: string;
  dateNaissance: any;
  email: string;
  password: string;
  picture:string;
  phoneNumber:number;
  adresse:string;
  role:any[];
  facture:any[];
  avisUser:any[];
  categorieUser:string;
  profession: string;
}
/*
* {
        "idUser": 1,
        "nom": "admin",
        "prenom": "dhieb",
        "dateNaissance": "2015-03-23",
        "email": "admin@gmail.com",
        "password": "$2a$10$/emUW0XQ1Cii.BIonWrCUub48LzZwEIxSbAt2Q6gLebw1wBUZz1JG",
        "picture": null,
        "phoneNumber": 111,
        "adresse": "aaa",
        "role": [
            {
                "id": 1,
                "role": "ADMIN"
            }
        ],
        "facture": [],
        "avisUser": [],
        "categorieUser": "Prenuim",
        "profession": "Etudiant"
    }
*
*
* */
