import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Produit} from "../model/produit";
import {User} from "../model/user";
import {Provider} from "../model/provider";
import {Stock} from "../model/stock";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
    })
  }
  currentProduct:Produit;
  status:boolean=false;
  modProduct(product:Produit){
    this.currentProduct=product;
  }
  UpdateProduct(produit:Produit){
    this.currentProduct=produit;
    this.status=true;
  }
  url=environment.url+"produit/";

  constructor(private http:HttpClient) { }
  getListProductService(){
    return this.http.get<Produit[]>(this.url+"retrieve-all-produits");
  }




  addProductService(product:Produit){
    return this.http.post(`${this.url}addProduit`, product);

  }


  deleteProductService(id:number){
    return this.http.delete(this.url+'remove-produit/'+id);
  }
  getProductServiceById(id:any){
    return this.http.get<Produit>(this.url+'getProduit/'+id);
  }





  updateProductService(id:number,product:Produit){
    return this.http.put(this.url+"modifier_produit/"+id,product,this.httpOptions);
  }




//added by adem
  getSingleProduct(id:number){
    return this.http.get(`${this.url}getProduit/${id}`);
  }


  getProductServiceLiked(id:number){
    return this.http.get(this.url+"modifierLike/"+id);
  }


}
