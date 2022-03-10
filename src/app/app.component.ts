import {Component, OnInit} from '@angular/core';
import {UserService} from "./core/services/user.service";
import {AuthService} from "./core/services/auth.service";
import {User} from "./core/model/user";
import { CartService } from './core/services/cart-service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ShopProject';
  constructor(private auth: AuthService , private cartService:CartService) {
  }

  itemInCart:number;
  ngOnInit() {

    this.cartService.cartItems.subscribe(d=>{
      this.itemInCart=d.length;
      //console.log(this.itemInCart);

    })


  }



}
