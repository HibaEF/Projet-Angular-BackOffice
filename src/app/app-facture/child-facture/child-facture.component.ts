import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Facture } from 'src/app/core/model/Facture';
import { FactureService } from 'src/app/core/services/facture-service/facture.service';

@Component({
  selector: 'app-child-facture',
  templateUrl: './child-facture.component.html',
  styleUrls: ['./child-facture.component.css']
})
export class ChildFactureComponent implements OnInit {

  @Input()listFacture:Facture[];
  @Output()deleteEvent=new EventEmitter<Facture>(); 
  
  constructor(private factureService:FactureService) { }
  
  searchText:any;

  ngOnInit(): void {
  }


  checkValue(facture:Facture,event: any){
    if(event=="B"){
      this.factureService.changeFactureStatus(facture.idFacture,false).subscribe()
      console.log(facture.idFacture);
    }
    else{
      console.log(facture.idFacture);
      this.factureService.changeFactureStatus(facture.idFacture,true).subscribe()
   } 
 }

 deleteFacture(facture:Facture){
    this.deleteEvent.emit(facture);
 }

}
