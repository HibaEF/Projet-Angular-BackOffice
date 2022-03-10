import { Component,OnInit} from '@angular/core';
import { Produit } from 'src/app/core/model/produit';
import { ProduitService } from 'src/app/core/services/produit.service';


@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css']
})
export class ProductTestComponent implements OnInit {


  listProducts:Produit[];
  constructor(private productService: ProduitService) { }

  ngOnInit(): void {
    this.productService.getListProductService().subscribe(
      (data:Produit[])=>this.listProducts=data
    )  
  }
  
}
