import { Component } from '@angular/core';
import {getEntreprise} from "../Models/entreprise.model";
import {getUser} from "../Models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../Services/alert.service";
import {EntreprisesService} from "../Services/entreprises.service";
import {AuthService} from "../Services/auth.service";
import {UserService} from "../Services/user.service";
import {ProduitsService} from "../Services/produits.service";
import {CartService} from "../Services/cart.service";
import {getProduit} from "../Models/produit.model";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  entreprise_idx! : number
  oneEntreprise!: getEntreprise;

  myinformations !: getUser;
  myCart !: getProduit[];

  constructor(private activatedroute : ActivatedRoute, private router: Router, private alertService: AlertService, private entreprisesService: EntreprisesService, private authService: AuthService, private userService: UserService, private produitService: ProduitsService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.entreprise_idx = this.activatedroute.snapshot.params['id'];
    this.entreprisesService.getEntreprisesById(this.entreprise_idx).subscribe(res => {
      this.oneEntreprise = res;
    });

    this.userService.getMyInfos().subscribe(res => {
      this.myinformations = res;
    });

    this.myCart = this.cartService.getCart();

  }

  addToCart(produit : getProduit){
    this.cartService.addToCart(produit);
    this.alertService.success('Le produit à bien été ajouté au panier');
  }

  removeFromCart(idProduit: number) {
    this.cartService.removeFormCart(idProduit);
    this.alertService.success('Le produit à bien été supprimé du panier');
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.myCart = [];
  }
}
