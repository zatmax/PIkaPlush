import {Component, Input, OnInit} from '@angular/core';
import {getProduit} from "../Models/produit.model";
import {Router} from "@angular/router";
import {CartService} from "../Services/cart.service";
import {AlertService} from "../Services/alert.service";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.css']
})
export class ProduitCardComponent implements OnInit {

  @Input()
  produit !: getProduit;

  loggedIn : boolean = false;

  constructor(private router: Router, private cartService: CartService, private alertService: AlertService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.authStateChanged.subscribe((loggedIn: boolean) =>{
      this.loggedIn = loggedIn;
    });
  }


  readMore(id: number) {
    this.router.navigate(['/','produits',id])
  }


  addToCart(produit : getProduit){
    this.cartService.addToCart(produit);
    this.alertService.success('Le produit à bien été ajouté au panier');
  }

}
