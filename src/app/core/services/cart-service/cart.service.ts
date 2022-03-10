import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct } from '../../model/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  placeHolder=[];
  cartItems=new BehaviorSubject([]);


  constructor(  ) { 
    const ls = this.getCartData();//check if we have any data in our localstorage
    if(ls)//if it does we are going to emit that data so we can subscribe to (if not we emit an empty data array)
      this.cartItems.next(ls)
      
  }

  addItem(cartproduct:CartProduct){
    const ls = this.getCartData();
    
    let exist:CartProduct;
    if (ls)
      exist=ls.find((item)=>{
        return item.id === cartproduct.id;
      });//on va chercher notre produit dans le local storage

      if(exist){//s'il existe: on va incrementer sa quantite et le rendre string pour le stocker dans le ls
        exist.qte++;
        this.setCartData(ls);
      }else{//s'il n'existe pas:
        if(ls){//si le local storage contient d'autres donnees apart le cart: on va ajouter le cart 
          const newData=[...ls,cartproduct];
          this.setCartData(newData);
        }else{
          this.placeHolder.push(cartproduct);
          this.setCartData(this.placeHolder);
        }
      }
  }


  setCartData(data:any){
    localStorage.setItem('cart',JSON.stringify(data)); 
    this.cartItems.next(this.getCartData());
  }

  getCartData(){
    return JSON.parse(localStorage.getItem('cart'))
  }

}
