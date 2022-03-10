import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { environment } from 'src/environments/environment';
import {Produit} from "../../core/model/produit";
import {
  HttpClient
} from '@angular/common/http';
import { NumberSymbol } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class StockService {
  url="http://localhost:8090/SpringMVC/stock/"
  constructor(private http: HttpClient) { }
  CurrentStock:Stock;
  status:boolean=false;
  MODStock(stock : Stock){
    this.CurrentStock=stock;
  }
  UpdateStock(stock :Stock){
    this.CurrentStock=stock;
    this.status=true;
  }
  getListStockService(){
    return this.http.get<Stock[]>(this.url+'retrieve-all-stocks')
    
    }
    addStockService(stock: Stock){

      return this.http.post(this.url+'add-stock', stock)
    }
    deleteStockService(id:string){
      return this.http.delete(this.url+'remove-stock/'+id)
    }
    updateStockService(stock: Stock, id:any){
      return this.http.put(this.url+'modify-stock/'+id,stock)
    }
    getStockServiceById(id:any){
      return this.http.get<Stock>(this.url+'retrieve-stock/'+id);
    }
    getListPrduitServiceById(id:any){
      return this.http.get<Produit[]>(this.url+'stat-stock/'+id);
    }

}
