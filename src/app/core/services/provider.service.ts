import { Injectable } from '@angular/core';
import { Provider } from '../model/provider';
import { environment } from 'src/environments/environment';
import {
  HttpClient
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  url="http://localhost:8090/SpringMVC/fournisseur/"
  constructor(private http: HttpClient) { }
  CurrentProvider:Provider;
  status:boolean=false;
  MODProvider(provider:Provider){
    this.CurrentProvider=provider;
  }
  UpdateProvider(provider:Provider){
    this.CurrentProvider=provider;
    this.status=true;
  }
  getListProviderService(){
    return this.http.get<Provider[]>(this.url+'retrieve-all-fournisseurs')
    
    }
    addProviderService(provider: Provider){
      return this.http.post(this.url+'add-fournisseur', provider)
    }
    deleteProviderService(id:string){
      return this.http.delete(this.url+'remove-fournisseur/'+id)
    }
    updateProviderService(provider:Provider, id:any){
      return this.http.put(this.url+'modify-fournisseur/'+id,provider)
    }
    getProviderServiceById(id:any){
      return this.http.get<Provider>(this.url+'retrieve-fournisseur/'+id);
    }
}
