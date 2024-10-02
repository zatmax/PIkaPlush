import {Component, OnInit} from '@angular/core';
import {getProduit} from "../Models/produit.model";
import {CartService} from "../Services/cart.service";

@Component({
  selector: 'app-recap-panier',
  templateUrl: './recap-panier.component.html',
  styleUrls: ['./recap-panier.component.css']
})
export class RecapPanierComponent implements OnInit {

  myCart !: getProduit[];
  totalPrice!: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.myCart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

}
