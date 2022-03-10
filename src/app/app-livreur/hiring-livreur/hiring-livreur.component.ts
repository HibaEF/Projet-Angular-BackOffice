import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/core/model/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-hiring-livreur',
  templateUrl: './hiring-livreur.component.html',
  styleUrls: ['./hiring-livreur.component.css']
})
export class HiringLivreurComponent implements OnInit {


  searchText:any;
  listLivreur: Livreur[]
  livreur: Livreur
  constructor(private livreurService: LivreurService,private router: Router) { }
   

  ngOnInit(): void {

    this.livreurService.hiredLivreurs().subscribe(
      (data:Livreur[])=> this.listLivreur= data

    )
    console.log(this.listLivreur)
  }


  accepter(livreurr: Livreur)
  {
    this.livreur=this.livreurService.currentLivreur;
    livreurr.status=true
    this.livreurService.acceptLivreur(livreurr).subscribe(
      ()=>this.router.navigate(['/livreur']))

  }

}
