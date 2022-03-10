import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livreur } from 'src/app/core/model/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {

  constructor(private livreurService: LivreurService,private router: Router,private activated:ActivatedRoute) { }
  livreur:Livreur;

   Livraison: any= [];

  map:any;
  @ViewChild('mapElement') mapElement:any;

  ngOnInit(): void {
    this.livreur=this.livreurService.currentLivreur;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.livreurService.getById(id).subscribe(
          (data) => this.livreur = data
        )
      }
    )

    this.loadLivraison()

  }
  
  
  return(){
    this.router.navigate(['/livreur']);
  }

  loadLivraison()
  {
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.livreurService.getListLivraisonById(id).subscribe(
      (data:any[])=> this.Livraison= data
    )
        }
    )
  }
}


