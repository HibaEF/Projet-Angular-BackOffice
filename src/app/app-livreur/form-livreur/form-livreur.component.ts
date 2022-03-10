import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/core/model/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-form-livreur',
  templateUrl: './form-livreur.component.html',
  styleUrls: ['./form-livreur.component.css']
})
export class FormLivreurComponent implements OnInit {

  livreur: Livreur[];
  lvr: Livreur;
  status:boolean;
  constructor(private livreurService : LivreurService,private router: Router) { }

  ngOnInit(): void {
    this.status=this.livreurService.status;
    if (this.livreurService.status){
      this.lvr =  this.livreurService.currentLivreur;
    }else {
      this.lvr =  new Livreur();
    }
  }

  save(){
    if (this.status){
      this.livreurService.updateListLivreurService(this.lvr).subscribe(
        ()=>this.router.navigate(['/livreur'])
      )
    }
    else {
      this.lvr.status=true;
      this.livreurService.addListLivreurService(this.lvr).subscribe(
        ()=>this.router.navigate(['/livreur'])
      )
    }
  }


  return(){
    this.router.navigate(['/livreur']);
  }


}