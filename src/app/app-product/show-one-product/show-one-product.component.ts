import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../core/model/user";
import {ProduitService} from "../../core/services/produit.service";
import {Produit} from "../../core/model/produit";

@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css']
})
export class ShowOneProductComponent implements OnInit {
  constructor(private productService:ProduitService, private router: Router, private activated:ActivatedRoute) { }
  product:Produit;
  ngOnInit(): void {
    this.product=this.productService.currentProduct;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.productService.getProductServiceById(id).subscribe(
          (data) => this.product = data
        )
      }
    )
  }
  fixProduct(){
    this.router.navigate(['/product']);
  }

}
