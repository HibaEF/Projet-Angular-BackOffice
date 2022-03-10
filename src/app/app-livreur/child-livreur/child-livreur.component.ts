import { Component, Input, OnInit, Output } from '@angular/core';
import { Livreur } from 'src/app/core/model/livreur';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-livreur',
  templateUrl: './child-livreur.component.html',
  styleUrls: ['./child-livreur.component.css']
})
export class ChildLivreurComponent implements OnInit {


  @Input()listLivreur:Livreur[];
  @Output()deleteEvent=new EventEmitter<Livreur>();
  @Output()updateEvent=new EventEmitter<Livreur>();
  
  constructor() { }


  searchText:any;


  ngOnInit(): void {
  }
  delete(currentLivreur:Livreur){
    this.deleteEvent.emit(currentLivreur);
  }
  update(currentLivreur:Livreur){
    this.updateEvent.emit(currentLivreur);
  }
}
