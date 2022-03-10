import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Facture } from '../../model/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  

  constructor(private http: HttpClient) { }
  url=environment.url+"Facture";

    getListFactureService(){
    return this.http.get<Facture[]>(`${this.url}/retreive-all-factures`)
    }
    addFactureService(facture: Facture,id:number):Observable<any>{
      return this.http.post(`${this.url}/add-facture/${id}/`, facture)      
    }
    setPrixTotalFacture(idFacture:number){
      return this.http.get(`${this.url}/update-prixTotal-montantRemise-facture/${idFacture}`)
    }
    changeFactureStatus(idFacture:number,status:boolean){
      return this.http.get(`${this.url}/update-facture/${idFacture}/${status}`)
    }
    deleteFactureService(idFacture:number){
      return this.http.delete(`${this.url}/delete-facture/${idFacture}`);
    }
    detailFactureService(idFacture:number){
      return this.http.get<Facture>(`${this.url}/detail-facture/${idFacture}`);
    }
    statsChiffreAffaire(){
      return this.http.get<number>(`${this.url}/stats-chiffre-affaire`);
    }
    statsNombreAchats(){
      return this.http.get<number>(`${this.url}/stats-nombre-achats`);
    }
    statsDeuxCA(){
      return this.http.get<number[]>(`${this.url}/get-deux-ca-successives`);
    }

    findFactureById(idF:number){
      return this.http.get<Facture>(`${this.url}/getFactureById/${idF}`);
    }
    
    updateFactureDetail(facture:Facture){
      return this.http.put<Facture>(`${this.url}/update-facture-detail`,facture);
    }
}
