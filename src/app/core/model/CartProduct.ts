import { Produit } from "./produit";

export class CartProduct implements Produit {
    idDetailProduit: number;
    dateCreation: Date;
    dateDerniereModification: Date;
    pourcentageRemise: number;
    id: number;
    libelle: string;
    code: string;
    description: string;
    quantite: number;
    prixUnitaire: number;
    picture: string;
    nbrLike: number;
    category: any;
    detailFacture: any[];
    rayon: any;
    s: any;
    fornisseur: any[];
    avisProduit: any[];
    detailproduit: any;
    qtyTotal: number;
    //variationCost: number;

    qte:number=0;
}