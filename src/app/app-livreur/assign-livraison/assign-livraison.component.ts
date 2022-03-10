import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livraison } from 'src/app/core/model/livraison';
import { LivraisonService } from 'src/app/core/services/livraison.service';
@Component({
  selector: 'app-assign-livraison',
  templateUrl: './assign-livraison.component.html',
  styleUrls: ['./assign-livraison.component.css']
})
export class AssignLivraisonComponent implements OnInit {
  livraison: Livraison;
  id:any
  constructor(private livraisonService: LivraisonService, private router: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    //this.livraison=this.livraisonService.currentLivreur;
    this.livraison =  new Livraison();
    this.activated.paramMap.subscribe(
      (params)=> {
        this.id = params.get('id');
        console.log("l'id du livreur est:"+this.id)

      }
    )
  }
  
  save()
  { 
    this.livraison.status=false;
    this.livraisonService.addLivraisonService(this.livraison,this.id).subscribe(
      ()=>this.router.navigate(['/livraison']))
  }
}
