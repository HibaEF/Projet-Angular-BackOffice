import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/core/services/provider.service';
import { Provider } from 'src/app/core/model/provider';
import {Router} from "@angular/router";
import swal from 'sweetalert';
@Component({
  selector: 'app-main-provider',
  templateUrl: './main-provider.component.html',
  styleUrls: ['./main-provider.component.css']
})
export class MainProviderComponent implements OnInit {
  inputProvider: Provider;
  ListProvider: Provider[];
  showFormTemplate: boolean;
  msg: string;
  searchText:any;
  constructor(private serviceProvider: ProviderService,private router: Router) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.serviceProvider.getListProviderService().subscribe(
      (data: Provider[]) => this.ListProvider= data
    )
  }
 /*  delete(provider: Provider){
    let i = this.ListProvider.indexOf(provider);
    this.serviceProvider.deleteProviderService(provider.id).subscribe(
      ( )=>this.ListProvider.splice(i,1)
    )
  } */
  
delete(provider:Provider){
  swal({
  
    title:"Are you sure?",
    text:"Once deleted, you will not be able to recover this provider!",
        icon: "warning",
        buttons: ["Cancel","Confirm"],
        dangerMode: true,
  
    })
    .then((willDelete)=>{
  
          if (willDelete) {
            let i =this.ListProvider.indexOf(provider);
            this.serviceProvider.deleteProviderService(provider.id).subscribe(
              ()=>this.ListProvider.splice(i,1)
            );
            swal("Provider has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Provider  is safe!");
          }
        });
  
  
  }
 
  update(provider: Provider){
    this.serviceProvider.UpdateProvider(provider);
    this.router.navigate(['/update-provider']);
  }
  AddProvider(){
    this.router.navigate(['/add-provider'])
  }

  ShowMore(provider: Provider){
    this.serviceProvider.getProviderServiceById(provider.id).subscribe(
      (providerF:Provider)=>[this.serviceProvider.MODProvider(providerF),this.router.navigate(['/show-provider'])]
    )
  }



  save(provider: Provider){
    let i = this.ListProvider.indexOf(provider);
    if(i!=-1){
      //update Provider
      this.serviceProvider.updateProviderService(provider,provider.id).subscribe(
      () => {this.ListProvider[i]=provider
        this.showFormTemplate =false}
      )
    }
    else {
      //add Provider
  
      this.showFormTemplate =false
  
    this.serviceProvider.addProviderService(provider).subscribe(
      () => this.ListProvider.push(provider),
      () => this.msg='Test'
    )
    }
  }
  showForm(){
    if(this.showFormTemplate === false){
      this.showFormTemplate = true
      this.inputProvider = new Provider();
    }
    else {
  
      this.showFormTemplate = false
    }
  }
}
