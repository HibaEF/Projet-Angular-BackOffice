import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Produit} from "../../core/model/produit";
import {Provider} from "../../core/model/provider";
import {ProduitService} from "../../core/services/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  /* @Input() product:Produit;
   @Output() addEvent=new EventEmitter<Produit>();

   myForm:FormGroup;*/

  status:boolean;
  produit:Produit;
  constructor(private productService:ProduitService, private router: Router, private activated:ActivatedRoute) { }



  ngOnInit(): void {
    //this.status=this.userService.status;
   /* this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.productService.getProductServiceById(id).subscribe(
          (data) => this.produit = data
        )
      }
    )*/

    this.status=this.productService.status;
    console.log(this.status)
    if (this.productService.status){
      this.produit =  this.productService.currentProduct;
    }else {
      this.produit =  new Produit();
    }

    console.log(this.produit)
  }








  fixProduct(){
    this.router.navigate(['/product']);
  }


  save(){
    this.productService.addProductService(this.produit).subscribe(
      ()=>this.router.navigate(['/product'])
    )
  }
  return(){
    this.router.navigate(['/product']);
  }
}












