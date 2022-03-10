import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user.service";
import {Router} from "@angular/router";
import {ProduitService} from "../../core/services/produit.service";
import {Produit} from "../../core/model/produit";
import {Provider} from "../../core/model/provider";
import swal from "sweetalert";

@Component({
  selector: 'app-show-all-product',
  templateUrl: './show-all-product.component.html',
  styleUrls: ['./show-all-product.component.css']
})
export class ShowAllProductComponent implements OnInit {
  buttonValue: string;
  searchText:any;
  inputProduct: Produit;
  listProduct: Produit[];
  showFormTemplate: boolean;
  constructor(private productService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getListProductService().subscribe(
      (data:Produit[])=>this.listProduct=data
    )
  }

  delete(product:Produit){

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          this.productService.deleteProductService(product.id);
            let i =this.listProduct.indexOf(product);
          console.log(product.id)
          this.productService.deleteProductService(product.id).subscribe(
            ()=>this.listProduct.splice(i,1)
          );
          swal("Product has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Product  is safe!");
        }
      });
    }

  ShowMore(product:Produit){
    this.productService.getProductServiceById(product.id).subscribe(
      (productF:Produit)=>[this.productService.modProduct(productF),this.router.navigate(['/show-product'])]
    )
  }
  update(product:Produit){
    this.productService.UpdateProduct(product);
    this.router.navigate(['/add-product']);
  }



  addProduct(){
    this.router.navigate(['/add-product']);
  }
/////////
  save(product: Produit): void{


    let i = this.listProduct.indexOf(product);
    if(i!=-1){
      //update Provider
      this.productService.updateProductService(product.id,product).subscribe(
        () => {this.listProduct[i]=product
          this.showFormTemplate =false}
      )
    }


    else {
      this.productService.addProductService(product).subscribe((data)=>{
        this.listProduct.push(product);
      });

      this.showFormTemplate = false
    }}









}
