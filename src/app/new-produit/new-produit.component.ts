import { Component, OnInit } from '@angular/core';
import {ProduitsService} from "../Services/produits.service";
import {getUser, UserJwtSessionDTO} from "../Models/user.model";
import {ProduitCreateDto} from "../Models/produit.model";
import {Router} from "@angular/router";
import {AlertService} from "../Services/alert.service";
import {AuthService} from "../Services/auth.service";
import {CategoriesService} from "../Services/categories.service";
import {getCategorie} from "../Models/categorie.model";
import {UserService} from "../Services/user.service";

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {

  userSession!: UserJwtSessionDTO;
  categoriesList?: getCategorie[];
  myinformations! : getUser;
  file?: File;


  newProduitForm = {nom: '', prix: 0, description: '', taille: '', image: '', categorieID: 0, entrepriseID: 0 };


  constructor(private produitService: ProduitsService, private router: Router, private alertService: AlertService, private authService: AuthService, private categoriesService : CategoriesService, private userService: UserService) {}

  ngOnInit() {
    this.userSession = this.authService.getCurrentSession();
    this.categoriesService.getAllCategories().subscribe(categories => {
      this.categoriesList = categories;
    });
    this.userService.getMyInfos().subscribe(res => {
      this.myinformations = res;
    });
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    if (this.file) {
      // Perform additional checks or validation if needed
      this.newProduitForm.image = 'http://localhost:3000/produits/pictures/' + this.file.name;
      console.log('Selected file name:', this.file.name);
    }
  }

  upload() {
    if (this.file) {
      this.produitService.uploadPhoto(this.file).subscribe(resp => {
        console.log('Uploaded');
      })
    } else {
      alert("Please select a file first")
      console.log('Please select a file first');
    }
  }


  onSubmit() {
    const produitCreate = this.newProduitForm as ProduitCreateDto;
    this.newProduitForm.entrepriseID =  this.myinformations.entreprise.id;
    this.upload();
    this.produitService.createProduit(produitCreate).subscribe({
      next: data => {
        this.router.navigate(['/entreprises/' + this.myinformations.entreprise.id]).then(() => this.alertService.success('Le produit à bien été ajoutée'));
      },
      error: err => {
        this.alertService.error(err.error.message);
      }
    });
  }

}
