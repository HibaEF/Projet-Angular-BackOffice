import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Provider } from 'src/app/core/model/provider';
import { ProviderService } from 'src/app/core/services/provider.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-form-add-provider',
  templateUrl: './form-add-provider.component.html',
  styleUrls: ['./form-add-provider.component.css']
})
export class FormAddProviderComponent implements OnInit {
  provider: Provider;
  status:boolean;
  constructor(private ServiceProvider : ProviderService,private router: Router) { }

  ngOnInit(): void {
    this.status=this.ServiceProvider.status;
    if (this.ServiceProvider.status){
      this.provider =  this.ServiceProvider.CurrentProvider;
    }else {
      this.provider =  new Provider();
    }
  }
  save(){
   /* if (this.status){
      this.ServiceProvider.updateProviderService(this.provider,this.provider.id).subscribe(
        ()=>this.router.navigate(['/show-all-provider'])
      )
    }
    else {
      
      this.ServiceProvider.addProviderService(this.provider).subscribe(
        ()=>this.router.navigate(['/show-all-provider'])
      )
    }*/
    this.ServiceProvider.addProviderService(this.provider).subscribe(
      ()=>this.router.navigate(['/show-all-provider']))
  }
  return(){
    this.router.navigate(['/show-all-provider']);
  }
}
