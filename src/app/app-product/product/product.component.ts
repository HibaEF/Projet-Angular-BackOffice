import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Produit} from "../../core/model/produit";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()product : Produit;
  @Output() notification = new EventEmitter<Produit>();
  @Output() deleteNotifEvent = new EventEmitter<Produit>();
  @Output() updateNotifEvent = new EventEmitter<Produit>();
  constructor() { }

  ngOnInit(): void {

  }
  notifierParent(){
    this.notification.emit(this.product)
  }
  deleteNotif(){
    this.deleteNotifEvent.emit(this.product)
  }
  updateNotif(){
    this.updateNotifEvent.emit(this.product)
  }
}
