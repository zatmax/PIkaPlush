import {Component, OnInit} from '@angular/core';
import {getEntreprise} from "../Models/entreprise.model";
import {ActivatedRoute, Router} from "@angular/router";
import {EntreprisesService} from "../Services/entreprises.service";
import {getUser} from "../Models/user.model";
import {AuthService} from "../Services/auth.service";
import {UserService} from "../Services/user.service";
import {ProduitsService} from "../Services/produits.service";
import {AlertService} from "../Services/alert.service";

@Component({
  selector: 'app-entreprise-unite',
  templateUrl: './entreprise-unite.component.html',
  styleUrls: ['./entreprise-unite.component.css']
})
export class EntrepriseUniteComponent implements OnInit {

  entreprise_idx! : number
  oneEntreprise!: getEntreprise;

  loggedIn : boolean = false;
  isVendeur : boolean = false;
  myinformations! : getUser;

  constructor(private activatedroute : ActivatedRoute, private router: Router, private alertService: AlertService, private entreprisesService: EntreprisesService, private authService: AuthService, private userService: UserService, private produitService: ProduitsService) {
  }

  ngOnInit(): void {
    this.entreprise_idx = this.activatedroute.snapshot.params['id'];
    this.entreprisesService.getEntreprisesById(this.entreprise_idx).subscribe(res => {
      this.oneEntreprise = res;
    });
    this.loggedIn = this.authService.isLoggedIn();
    this.isVendeur = this.authService.isVendeur();

    this.userService.getMyInfos().subscribe(res => {
      this.myinformations = res;
    });

  }


  supprimerProduit(id: number): void {
    this.produitService.deleteProduit(id).subscribe({
      next: data => {
        this.router.navigate(['/monCompte']).then(() => {
          this.alertService.success('Le produit a bien été supprimé');
        });
      },
      error: err => {
        this.alertService.error(err.error.message);
      }
    });
  }
}
