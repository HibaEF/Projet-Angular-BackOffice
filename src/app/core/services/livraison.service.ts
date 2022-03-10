import { Injectable } from '@angular/core';
import {Livraison} from "../model/livraison";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, Subscription, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Livreur } from '../model/livreur';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  lvr: Livraison[] 

  httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin':'*',
   })
 }
chart: any []
url=environment.url+"livraison/";

  constructor(private http:HttpClient) {     console.log("dkhalna l service");
  
  }

  // Error handling 
  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
 count()
 {
   let lvr=this.http.get<Livraison>(this.url+"retrieve-all-livraisons", this.httpOptions);
   console.log(lvr)
   return lvr
 }
 getListLivraisonService()
 {

  return this.http.get<Livraison>(this.url+"retrieve-all-livraisons", this.httpOptions)


}
 deleteLivraisonService(id:any)
 {
  return this.http.delete(this.url+"remove-livraison/"+id)
 }
 
 addLivraisonService(livraison:Livraison,id:number)
 {
   return this.http.post(this.url+"add-livraison/"+id,livraison, this.httpOptions)
 }

   getLivraisonServiceById(id:any){
    return this.http.get<Livraison>(this.url+id);
  }

  
  CountDelievered(){
    let x1= this.http.get(this.url+"count-delivered/", this.httpOptions)
    return x1
  }

  // CountUndelievered(){
  //   return this.http.get(this.url+"count-undelivered");
  // }

  updateLivraisonService(livraison:Livraison)
  {
    return this.http.put(this.url+"modify-livraison/",livraison);
  }

  CurrentLivraison:Livraison;
  status:boolean=false;
  MODLivraison(Livraison:Livraison){
    this.CurrentLivraison=Livraison;
  }
  UpdateLivraison(Livraison:Livraison){
    this.CurrentLivraison=Livraison;
    this.status=true;
  }

   

}
