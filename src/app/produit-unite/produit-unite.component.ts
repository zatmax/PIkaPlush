import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitsService} from "../Services/produits.service";
import {getProduit} from "../Models/produit.model";
import {CartService} from "../Services/cart.service";
import {AlertService} from "../Services/alert.service";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-produit-unite',
  templateUrl: './produit-unite.component.html',
  styleUrls: ['./produit-unite.component.css']
})
export class ProduitUniteComponent implements OnInit{
  prd_idx! : number
  oneProduit!: getProduit;
  loggedIn : boolean = false;

  constructor(private activatedroute : ActivatedRoute, private produitService: ProduitsService, private cartService: CartService, private alertService: AlertService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.prd_idx= this.activatedroute.snapshot.params['id'];

    this.produitService.getProduitsById(this.prd_idx).subscribe(res => {
      this.oneProduit = res;
    });

    this.authService.authStateChanged.subscribe((loggedIn: boolean) =>{
      this.loggedIn = loggedIn;
    });

  }

  addToCart(produit : getProduit){
    this.cartService.addToCart(produit);
    this.alertService.success('Le produit à bien été ajouté au panier')
  }

}
