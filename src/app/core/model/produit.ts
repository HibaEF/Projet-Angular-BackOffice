import {Stock} from "./stock";
import {Rayon} from "./rayon";
import {DetailProduit} from "./DetailProduit";





export class Produit{
  id: number;
  libelle: string;
  code: string;
  description: string;

  prixUnitaire: number;
  picture : string;
  nbrLike: number;
  category : string;
  //detailFacture:any[];
  rayon:Rayon;
  s:Stock;
  //fornisseur:any[];
  //avisProduit:any[];
  detailproduit:DetailProduit;
  //qtyTotal:number=0;
  pourcentageRemise:number;
  //variationCost:number;
  //idDetailProduit:number;
  //dateCreation: Date;
  //dateDerniereModification :Date;

}
