import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/core/model/CartProduct';
import { Produit } from 'src/app/core/model/produit';
import { CartService } from 'src/app/core/services/cart-service/cart.service';
import { ProduitService } from 'src/app/core/services/produit.service';

@Component({
  selector: 'app-product-detail-test',
  templateUrl: './product-detail-test.component.html',
  styleUrls: ['./product-detail-test.component.css']
})
export class ProductDetailTestComponent implements OnInit {

  constructor(private productService: ProduitService,private activated:ActivatedRoute,private cartService:CartService) { }

  cartProduct:CartProduct;
  product:Produit;

  ngOnInit(): void {
     this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.productService.getSingleProduct(Number(id)).subscribe(
          (data:CartProduct)=>{
              this.cartProduct=data
              this.cartProduct.qte=0;
            }
        )    
      }
    )
    
   
  }
  addToCart(cp:CartProduct){
    this.cartService.addItem(cp);
  }



}
