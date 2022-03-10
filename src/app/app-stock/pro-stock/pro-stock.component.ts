import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/core/services/stock.service';
import {Produit} from "../../core/model/produit";
import {ActivatedRoute, Router} from "@angular/router";
import { Stock } from 'src/app/core/model/stock';

@Component({
  selector: 'app-pro-stock',
  templateUrl: './pro-stock.component.html',
  styleUrls: ['./pro-stock.component.css']
})
export class ProStockComponent implements OnInit {
  listProduct: Produit[];

  constructor(private stockService: StockService,private router: Router,private activated:ActivatedRoute) { }
stock :Stock;
  ngOnInit(): void {
    this.stock=this.stockService.CurrentStock;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.stockService.getListPrduitServiceById(id).subscribe(
          (data) => this.listProduct= data
        )
      }
    )

  }

}
