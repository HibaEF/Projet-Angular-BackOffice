import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetailFacture } from '../../model/DetailFacture';

@Injectable({
  providedIn: 'root'
})
export class DetailFactureService {

  constructor(private http: HttpClient) { }

  url=environment.url+"DetailFacture";



  addDetailFactureService(idProduit: number,idFacture:number,qte:number){
    return this.http.get(`${this.url}/add-detailFacture/${idProduit}/${idFacture}/${qte}`);      
  }


}
