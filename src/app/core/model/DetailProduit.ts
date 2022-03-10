import {CategorieProduit} from "../../enumeration/CategorieProduit";
import {Produit} from "./produit";

export class DetailProduit{
  idDetailProduit:number;
  dateDerniereModification:Date;
  dateCreation:Date;
  CategorieProduit:CategorieProduit;
  produit:Produit;

}
