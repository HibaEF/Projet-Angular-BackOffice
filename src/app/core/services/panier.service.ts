import { Injectable } from '@angular/core';
import { Panier } from '../model/Panier';
import { environment } from 'src/environments/environment';
import {
  HttpClient
} from '@angular/common/http';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  // products:Product[]=[{
  //   "title": "test",
  //   "description": "test",
  //   "quantity": 55,
  //   "price": 1233,
  //   "picture": "assets/femme.jpeg",
  //   "nbrLike": 0,
  //   "id": 13,
  //   "category": "Vestimentaire"
  // },
  // {
  //   "picture": "assets/regentlogo.jpg",
  //   "title": "new",
  //   "quantity": 7,
  //   "price": 88,
  //   "description": "new newxcf vbvb",
  //   "nbrLike": 0,
  //   "id": 18,
  //   "category": "Vestimentaire"
  // },
  // {
  //   "title": "okujh",
  //   "picture": "assets/10034515C255_81_G.jpg",
  //   "quantity": 20,
  //   "price": 33,
  //   "description": "aqqd dvsvs c dvs  xvsxv g gn",
  //   "nbrLike": 0,
  //   "id": 19,
  //   "category": "Vestimentaire"
  // },
  // {
  //   "title": "women t shirt",
  //   "picture": "assets/10034595C056_83_G.jpg",
  //   "quantity": 1,
  //   "price": 100,
  //   "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam itaque quas modi sunt aspernatur assumenda autem pariatur!",
  //   "nbrLike": 0,
  //   "id": 20,
  //   "category": "Vestimentaire"
  // }];

  url=environment.url+"panier"
  constructor(private http: HttpClient) { }

    getListPanierService(){
    return this.http.get<Panier[]>(`${this.url}/retrieve-all-paniers`)
    }
    addPanierService(panier: Panier){
      return this.http.post(this.url, panier)
    }
    deletePanierService(idPanier:number){
      return this.http.delete(`${this.url}/remove-panier/${idPanier}`)
    }
    updatePanierService(panier: Panier){
      return this.http.put(this.url+panier.idPanier,panier)
    }
    getPanierById(idPanier:number){
      return this.http.get(`${this.url}/retrieve-panier/${idPanier}`)
    }

}
