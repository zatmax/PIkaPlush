import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProduitsComponent} from "./produits/produits.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ProduitUniteComponent} from "./produit-unite/produit-unite.component";
import {EntreprisesComponent} from "./entreprises/entreprises.component";
import {EntrepriseUniteComponent} from "./entreprise-unite/entreprise-unite.component";
import {ContactComponent} from "./contact/contact.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import {NewProduitComponent} from "./new-produit/new-produit.component";
import {NewEntrepriseComponent} from "./new-entreprise/new-entreprise.component";
import {PaiementComponent} from "./paiement/paiement.component";
import {UpdateProduitComponent} from "./update-produit/update-produit.component";
import {PanierComponent} from "./panier/panier.component";
import {RecapPanierComponent} from "./recap-panier/recap-panier.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'produits',
    component: ProduitsComponent
  },
  {
    path : 'produits/:id',
    component: ProduitUniteComponent
  },
  {
    path : 'entreprises',
    component: EntreprisesComponent
  },
  {
    path : 'entreprises/:id',
    component: EntrepriseUniteComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  },
  {
    path : 'register',
    component: RegisterComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'monCompte',
    component: MonCompteComponent
  },
  {
    path : 'newProduit',
    component: NewProduitComponent
  },
  {
    path : 'newEntreprise',
    component: NewEntrepriseComponent
  },
  {
    path : 'paiement',
    component: PaiementComponent
  },
  {
    path : 'modifierProduit/:id',
    component: UpdateProduitComponent
  },
  {
    path : 'panier',
    component: PanierComponent
  },
  {
    path : 'recapPanier',
    component: RecapPanierComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
