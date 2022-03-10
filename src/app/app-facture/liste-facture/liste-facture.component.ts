import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/core/model/Facture';
import { FactureService } from 'src/app/core/services/facture-service/facture.service';

import swal from "sweetalert";

@Component({
  selector: 'app-liste-facture',
  templateUrl: './liste-facture.component.html',
  styleUrls: ['./liste-facture.component.css']
})
export class ListeFactureComponent implements OnInit {

  constructor(private factureService:FactureService) { }

  listFacture:Facture[];

  ngOnInit(): void {
    this.factureService.getListFactureService().subscribe(
      (data)=>{
        this.listFacture=data
        console.log(data);
      }
    )

  }
  
  isChecked;
  initialise(facture:Facture){
    this.isChecked=facture.active
  }

 
  
  changeStatus(facture:Facture){
    if(facture.active==true)
      this.factureService.changeFactureStatus(facture.idFacture,false).subscribe(
        
      )
    else
      this.factureService.changeFactureStatus(facture.idFacture,true).subscribe(
        )

  }


  deleteFacture(facture:Facture){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Facture!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          this.factureService.deleteFactureService(facture.idFacture);
    let i = this.listFacture.indexOf(facture);
    this.factureService.deleteFactureService(facture.idFacture).subscribe(
      ()=>this.listFacture.splice(i,1)
      )
    
          swal("Facture has been deleted!", {
            icon: "success",
          });
        } /*else {
          swal("Product  is safe!");
        }*/
      });
    }


}
