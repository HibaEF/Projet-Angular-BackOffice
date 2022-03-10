import { Component, OnInit } from '@angular/core';
import {Produit} from "../../core/model/produit";
import {ProduitService} from "../../core/services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {

  listProduct: Produit[];
  p:Produit;
  liked:boolean=false;
  showFormTemplate: boolean;
  buttonValue: string;
  inputProduct: Produit // the parent component will send this input to the child (formProduct)
  constructor(private productService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue = "add new Product";

    /* this.productService.getListProductService().subscribe(
       (data:Produit[])=>this.listProduct=data
     )*/
    this.productService.getListProductService().subscribe(
      (data: Produit[]) => this.listProduct = data
    )


  }
  like(product: Produit): void{

    /*let i = this.listProduct.indexOf(product);
    this.listProduct[i].nbrLike++
    *///console.log(this.listProduct)
    let i = this.listProduct.indexOf(product);
    this.productService.getProductServiceLiked(this.listProduct[i].id).subscribe(
      (data: Produit) => this.listProduct[i] = data
    )
    if(this.liked) {
      this.liked = false;
      this.listProduct[i].nbrLike--

    }
    else {
      this.liked = true
      this.listProduct[i].nbrLike++
    }
    console.log(this.liked)
  }

  //the method save will check if is an update case or adding a new product case
  // save(product: Produit): void{
  //   let i = this.listProduct.indexOf(product);
  //   if(i!= -1){
  //     this.listProduct[i]= product
  //   }
  //   else {
  //     this.productService.addProductService(product).subscribe((data)=>{
  //       this.listProduct.push(product);
  //     });
  //
  //   this.showFormTemplate = false
  // }}
  showForm(){
    if (this.showFormTemplate ===false){
      this.showFormTemplate = true
      this.buttonValue= "go Back to the List";
      this.inputProduct = new Produit();
    }
    else {
      this.buttonValue="add new Product";
      this.showFormTemplate = false
    }
  }
  delete(product:Produit): void{
    let i = this.listProduct.indexOf(product);
    this.listProduct.splice(i,1);
  }
  update(product: Produit): void{
    //in order to update a product, the parent component will change the input value
    //and send it to the child component
    this.inputProduct = product;
    this.showFormTemplate = true;

  }

}
