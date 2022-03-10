import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/core/model/CartProduct';
import { DetailFacture } from 'src/app/core/model/DetailFacture';
import { Facture } from 'src/app/core/model/Facture';
import { CartService } from 'src/app/core/services/cart-service/cart.service';
import { DetailFactureService } from 'src/app/core/services/detailFacture-service/detail-facture.service';
import { FactureService } from 'src/app/core/services/facture-service/facture.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [DatePipe]
})
export class CartComponent implements OnInit {
  

  constructor(private cartService:CartService,private factureService:FactureService, private detailFactureService:DetailFactureService) { 
    
  }

  cartItems:CartProduct[]=[];
  total:number;
  discount:number;


  ngOnInit(): void {

    this.cartService.cartItems.subscribe(
      (data)=>{
        this.cartItems=data
        if(this.cartItems) this.getTotal(this.cartItems);

      });
    
  };


    onDelete(i:number){
      this.cartItems.splice(i,1);
      this.cartService.setCartData(this.cartItems);
      this.getTotal(this.cartItems);
    }


    validateInput(event:any,i:number){
      const qty=+event.target.value;//+ transforms the string to number
      console.log(`qty: ${qty}`);
      
      if(qty<1){
        event.target.value= this.cartItems[i].qte;
        return;
      }
      this.QtyUpdated(qty,i);
    }
    
    private QtyUpdated(qty:number,i:number){
      this.cartItems[i].qte=qty;
      this.cartService.setCartData(this.cartItems);
      this.getTotal(this.cartItems);
    }


    getTotal(data:any){
      let sub=0;
      let disc=0;
      
      for(const item of data)
        {
          sub+=item.prixUnitaire*item.qte;
          disc+=((item.prixUnitaire*item.qte)*item.pourcentageRemise/100)
        }
        this.total=sub;
        this.discount=disc;
      
    }
     id:number;

    generateFacture(){
      let date=new Date()
      let f:Facture={
       idFacture:null,
        montantRemise: 1,
        montantFacture: 0,
        dateFacture: date,
        active: true, 
        user:null,
        detailFacture:null
      };      
       this.factureService.addFactureService(f,1).subscribe(
        data=>{
          this.id=data.valueOf()["idFacture"]
          for(var i=0;i<this.cartItems.length;i++){
              this.detailFactureService.addDetailFactureService(this.cartItems[i].id,this.id,this.cartItems[i].qte).subscribe(
                (data)=>this.factureService.setPrixTotalFacture(this.id).subscribe()
              )
          }
       }
      )
    }
}