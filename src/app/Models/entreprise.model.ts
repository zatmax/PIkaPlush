import {getProduit} from "./produit.model";

export interface getEntreprise {
  id: number,
  nom: string,
  adresse: string,
  spe: string,
  siret: string,
  type: string,
  produits?: getProduit[]
}


export interface EntrepriseCreateDto{
  nom: string,
  adresse: string,
  spe: string,
  siret: string,
  type: string,
  idUser: number,
}
