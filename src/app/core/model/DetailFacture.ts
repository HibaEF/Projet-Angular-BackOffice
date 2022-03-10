import { Facture } from "./Facture";
import { Panier } from "./Panier";
import { Produit } from "./produit";

export class DetailFacture{
    idDetailFacture: string;
    qte: number;
    prixTotal: number;
    porcentageRemise: number;
    montantRemise : number;
    facture:Facture;
    produit:Produit;
    panier:Panier;
}
