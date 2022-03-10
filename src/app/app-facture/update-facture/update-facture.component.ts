import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from 'src/app/core/model/Facture';
import { FactureService } from 'src/app/core/services/facture-service/facture.service';

@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styleUrls: ['./update-facture.component.css']
})
export class UpdateFactureComponent implements OnInit {

  constructor( private factureService:FactureService , private router:Router,private activated:ActivatedRoute ) { }
  facture:Facture;
  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
        this.factureService.findFactureById(id).subscribe(
          d=>{
            this.facture=d;
          }
        )  
      }
    )
  }

  save(){
     this.factureService.updateFactureDetail(this.facture).subscribe(
       d=>{
         this.router.navigate(['liste-facture'])
       }
     )


  }
}
