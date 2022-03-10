import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Stock } from 'src/app/core/model/stock';
import { StockService } from 'src/app/core/services/stock.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-form-add-stock',
  templateUrl: './form-add-stock.component.html',
  styleUrls: ['./form-add-stock.component.css']
})
export class FormAddStockComponent implements OnInit {
  stock: Stock;
  status:boolean;
  constructor(private ServiceStock : StockService,private router: Router) { }

  ngOnInit(): void {
    this.status=this.ServiceStock.status;
    if (this.ServiceStock.status){
      this.stock =  this.ServiceStock.CurrentStock;
    }else {
      this.stock =  new Stock();
    }
  }
  save(){
   /* if (this.status){
      this.ServiceStock.updateStockService(this.stock,this.stock.id).subscribe(
        ()=>this.router.navigate(['/show-all-stock'])
      )
    }
    else {
      
      this.ServiceStock.addStockService(this.stock).subscribe(
        ()=>this.router.navigate(['/show-all-stock'])
      )
    }*/
    this.ServiceStock.addStockService(this.stock).subscribe(
      ()=>this.router.navigate(['/show-all-stock']))
  }
  return(){
    this.router.navigate(['/show-all-stock']);
  }

}
