import { Component, OnInit } from '@angular/core';
import { AlertService } from '../Services/alert.service';
import {CartService} from "../Services/cart.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  paiementForm: FormGroup

  totalPrice !: number;

  constructor(private fb: FormBuilder, private cartService: CartService, private alertService: AlertService, private router: Router) {
    this.paiementForm = this.fb.group({
      cardNumber: [''],
      cardHolder: [''],
      expiration: [''],
      cvv: ['']
    });
  }

  ngOnInit() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  payementOk() {
    let formData = this.paiementForm.value;
    if (formData.cardNumber !== "" && formData.cardHolder !== "" && formData.expiration !== "" && formData.cvv !== ""){
      this.alertService.success('Le paiement a bien été effectué, merci d\'avoir commandé chez nous :)');
      this.clearCart();
      this.router.navigate(['/home']);
    } else {
      this.alertService.error('Veuillez remplir tous les champs correctement');
    }
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

}
