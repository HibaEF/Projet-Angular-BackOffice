import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/core/model/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';
import swal from "sweetalert";

@Component({
  selector: 'app-main-livreur',
  templateUrl: './main-livreur.component.html',
  styleUrls: ['./main-livreur.component.css']
})
export class MainLivreurComponent implements OnInit {

  listLivreur: Livreur[];
  currentLivreur: Livreur;
  searchText:any;

  constructor(private livreurService: LivreurService,private router: Router) { }
   

  ngOnInit(): void {
    this.livreurService.getListLivreurService().subscribe(
      (data:Livreur[])=> this.listLivreur= data

    )
    console.log(this.listLivreur)
  }
 
  delete(livreur: Livreur){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          //this.livreurService.deleteListLivreurService(livreur.id);
          let i =this.listLivreur.indexOf(livreur)
          console.log(i);
          
          this.livreurService.deleteListLivreurService(livreur.id).subscribe(
            ()=>this.listLivreur.splice(i,1)
          )
          this.ngOnInit()
          swal("Product has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Product  is safe!");
        }
      });
 
   }
  load()
  {
    return this.livreurService.getListLivreurService().subscribe()
  }

  update(livreur: Livreur){
  this.livreurService.UpdateLivreur(livreur);
  this.router.navigate(['/add-livreur']);
  }

  ShowMore(livreur:Livreur){
    this.livreurService.getLivreurServiceById(livreur.id).subscribe(
      (livreurD:Livreur)=>[this.livreurService.MODLivreur(livreurD),this.router.navigate(['/livreur/:id'])]
    )
  }
}
