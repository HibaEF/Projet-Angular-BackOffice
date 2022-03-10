import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livraison } from 'src/app/core/model/livraison';
import { LivraisonService } from 'src/app/core/services/livraison.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-livraison',
  templateUrl: './form-livraison.component.html',
  styleUrls: ['./form-livraison.component.css']
})
export class FormLivraisonComponent implements OnInit {

  livraison: Livraison;
  listLivraison: Livraison[]
  status: boolean
  id:number
  ngOnInit(): void {
    this.status=this.livraisonService.status;
    if (this.livraisonService.status){
      this.livraison =  this.livraisonService.CurrentLivraison;
    }else {
      this.livraison =  new Livraison();
    }
  }
  constructor(private livraisonService: LivraisonService,public router: Router) { }
 
  save() {
    
    if (this.status){
      this.livraison.status=false;
      this.livraisonService.updateLivraisonService(this.livraison).subscribe(
        ()=>this.router.navigate(['/livraison'])
      )
    }
    else {
      this.livraison.status=false;
      this.livraisonService.addLivraisonService(this.livraison,this.id).subscribe(
        ()=>this.router.navigate(['/livraison'])
      )
    }
  }

  return()
  {
    this.router.navigate(['/livraison'])

  }
}
