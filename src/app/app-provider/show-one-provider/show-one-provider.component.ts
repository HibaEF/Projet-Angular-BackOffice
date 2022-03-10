import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/core/services/provider.service';
import {ActivatedRoute, Router} from "@angular/router";
import { Provider } from 'src/app/core/model/provider';
@Component({
  selector: 'app-show-one-provider',
  templateUrl: './show-one-provider.component.html',
  styleUrls: ['./show-one-provider.component.css']
})
export class ShowOneProviderComponent implements OnInit {
  
  constructor(private ServiceProvider: ProviderService,private router: Router,private activated:ActivatedRoute) { }
  provider:Provider;
  ngOnInit(): void {
    this.provider=this.ServiceProvider.CurrentProvider;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.ServiceProvider.getProviderServiceById(id).subscribe(
          (data) => this.provider = data
        )
      }
    )

  }

  fixProvider(){
    this.router.navigate(['/show-all-provider']);
  }

}
