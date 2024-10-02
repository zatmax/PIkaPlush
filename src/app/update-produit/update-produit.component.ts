import {Component, OnInit} from '@angular/core';
import {getProduit, updateProduitDTO} from "../Models/produit.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitsService} from "../Services/produits.service";
import {getUser, UserJwtSessionDTO} from "../Models/user.model";
import {getCategorie} from "../Models/categorie.model";
import {AlertService} from "../Services/alert.service";
import {AuthService} from "../Services/auth.service";
import {CategoriesService} from "../Services/categories.service";
import {UserService} from "../Services/user.service";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  prd_idx! : number
  oneProduit!: getProduit;
  userSession!: UserJwtSessionDTO;
  categoriesList?: getCategorie[];
  myinformations! : getUser;
  file?: File;

  updateProduitForm = {nom: '', prix: 0, desc: '', taille: '', image: '', categorieID: 0 };


  constructor(private activatedroute : ActivatedRoute, private produitService: ProduitsService, private router: Router, private alertService: AlertService, private authService: AuthService, private categoriesService : CategoriesService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.prd_idx = this.activatedroute.snapshot.params['id'];

    this.produitService.getProduitsById(this.prd_idx).subscribe(res => {
      this.oneProduit = res;
      this.updateProduitForm.nom = this.oneProduit.nom;
      this.updateProduitForm.prix =  this.oneProduit.prix;
      this.updateProduitForm.desc = this.oneProduit.desc;
      this.updateProduitForm.taille = this.oneProduit.taille;
      this.oneProduit.image = this.oneProduit.image;
      this.updateProduitForm.categorieID = this.oneProduit.categorie?.id;

    });

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
      this.updateProduitForm.image = 'http://localhost:3000/produits/pictures/' + this.file.name;
      console.log('Selected file name:', this.file.name);
    }else {
      // Si aucun fichier n'est sélectionné, conservez la valeur de l'image actuelle
      this.updateProduitForm.image = this.oneProduit.image;
    }
  }

  upload() {
    if (this.file) {
      this.produitService.uploadPhoto(this.file).subscribe(resp => {
        // alert("Uploaded")
        console.log('Uploaded');
      })
    }
  }

  onSubmit() {
    const produitUpdate = this.updateProduitForm as updateProduitDTO;
    if(this.updateProduitForm.image == ''){
      this.updateProduitForm.image = this.oneProduit.image
    }
    this.upload();
    this.produitService.updateProduit(produitUpdate, this.oneProduit.id).subscribe({
      next: data => {
        this.router.navigate(['/entreprises/' + this.myinformations.entreprise.id]).then(() => this.alertService.success('Le produit à bien été modifié'));
      },
      error: err => {
        this.alertService.error(err.error.message);
      }
    });
  }

}
