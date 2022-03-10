import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/core/model/stock';
import { StockService } from 'src/app/core/services/stock.service';
import {Router} from "@angular/router";
import swal from 'sweetalert';
@Component({
  selector: 'app-main-stock',
  templateUrl: './main-stock.component.html',
  styleUrls: ['./main-stock.component.css']
})
export class MainStockComponent implements OnInit {
  inputStock: Stock;
  ListStock: Stock[];
  showFormTemplate: boolean;
  msg: string;
  searchText:any;
  constructor(private serviceStock: StockService,private router: Router) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.serviceStock.getListStockService().subscribe(
      (data: Stock[]) => this.ListStock= data
    )
  }
  delete(stock: Stock): void{
    swal({
  
      title:"Are you sure?",
      text:"Once deleted, you will not be able to recover this stock!",
          icon: "warning",
          buttons: ["Cancel","Confirm"],
          dangerMode: true,
    
      })
      .then((willDelete)=>{
    
            if (willDelete) {
    let i = this.ListStock.indexOf(stock);
    this.serviceStock.deleteStockService(stock.id).subscribe(
      ( )=>this.ListStock.splice(i,1)
    );
    swal("Stock has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Stock  is safe!");
  }
});
  }
  update(stock: Stock){
    this.serviceStock.UpdateStock(stock);
    this.router.navigate(['/add-stock']);
  }
  AddStock(){
    this.router.navigate(['/add-stock'])
  }
  ShowMore(stock: Stock){
    this.serviceStock.getStockServiceById(stock.id).subscribe(
      (stockF:Stock)=>[this.serviceStock.MODStock(stockF),this.router.navigate(['/show-stock'])]
    )
  }


  save(stock: Stock){
    let i = this.ListStock.indexOf(stock);
    if(i!=-1){
      //update Stock
      this.serviceStock.updateStockService(stock,stock.id).subscribe(
      () => {this.ListStock[i]=stock
        this.showFormTemplate =false}
      )
    }
    else {
      //add Stock
  
      this.showFormTemplate =false
  
    this.serviceStock.addStockService(stock).subscribe(
      () => this.ListStock.push(stock),
      () => this.msg='Test'
    )
    }
  }
  showForm(){
    if(this.showFormTemplate === false){
      this.showFormTemplate = true
      this.inputStock = new Stock();
    }
    else {
  
      this.showFormTemplate = false
    }
  }
}
