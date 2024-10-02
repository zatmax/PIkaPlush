import {getEntreprise} from "./entreprise.model";
import {getCategorie} from "./categorie.model";

export interface getProduit {
  id: number;
  nom: string;
  prix: number;
  desc: string;
  taille: string;
  image: string;
  categorie: getCategorie;
  entreprise?: getEntreprise;
}

export interface ProduitCreateDto{
  nom: string;
  prix: number;
  description: string;
  taille: string;
  image: string;
  categorieID: number;
  entrepriseID: number;
}

export interface updateProduitDTO{
  nom: string;
  prix: number;
  desc: string;
  taille: string;
  image: string;
  categorieID: number;
}
