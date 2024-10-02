import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProduitUniteComponent } from './produit-unite/produit-unite.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EntrepriseUniteComponent } from './entreprise-unite/entreprise-unite.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AuthInterceptor} from "./Interceptor/auth-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { NewEntrepriseComponent } from './new-entreprise/new-entreprise.component';
import { PaiementComponent } from './paiement/paiement.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ProduitCardComponent } from './produit-card/produit-card.component';
import { EntrepriseCardComponent } from './entreprise-card/entreprise-card.component';
import { PanierComponent } from './panier/panier.component';
import { RecapPanierComponent } from './recap-panier/recap-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsComponent,
    NotFoundComponent,
    ProduitUniteComponent,
    HeaderComponent,
    FooterComponent,
    EntreprisesComponent,
    EntrepriseUniteComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    MonCompteComponent,
    NewProduitComponent,
    NewEntrepriseComponent,
    PaiementComponent,
    UpdateProduitComponent,
    ProduitCardComponent,
    EntrepriseCardComponent,
    PanierComponent,
    RecapPanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
