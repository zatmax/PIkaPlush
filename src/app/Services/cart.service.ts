import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {getProduit} from "../Models/produit.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartKey = 'monPanier';
  private cartSubject = new BehaviorSubject<number>(0);
  private cart: getProduit[] = [];
  cartStateChanged = this.cartSubject.asObservable();


  constructor() {
    this.loadCartFromLocalStorage();
    this.cartSubject.next(this.cart.length);
  }
  addToCart(produit : getProduit){
    this.cart.push(produit);
    this.saveCartToLocalStorage();
    this.cartSubject.next(this.cart.length);
  }

  public getCart(): getProduit[]{
    return this.cart;
  }

  private loadCartFromLocalStorage() {
    const cartJson = localStorage.getItem(this.cartKey);
    this.cart = cartJson ? JSON.parse(cartJson) : [];
  }

  private saveCartToLocalStorage() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
  }

  removeFormCart(idProduit: number) {
    const index = this.cart.findIndex((produit) => produit.id === idProduit);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.saveCartToLocalStorage();
      this.cartSubject.next(this.cart.length);
    }

  }

  public getTotalPrice(): number {
    let totalPrice = 0;
    for (const produit of this.cart) {
      totalPrice += produit.prix;
    }
    return Number(totalPrice.toFixed(2));
  }

  public clearCart(): void {
    this.cart = [];
    this.saveCartToLocalStorage();
    this.cartSubject.next(0);
  }




}
