import {Component, OnInit} from '@angular/core';
import {getUser, UserJwtSessionDTO} from "../Models/user.model";
import {EntreprisesService} from "../Services/entreprises.service";
import {Router} from "@angular/router";
import {AlertService} from "../Services/alert.service";
import {AuthService} from "../Services/auth.service";
import {UserService} from "../Services/user.service";
import {EntrepriseCreateDto} from "../Models/entreprise.model";

@Component({
  selector: 'app-new-entreprise',
  templateUrl: './new-entreprise.component.html',
  styleUrls: ['./new-entreprise.component.css']
})
export class NewEntrepriseComponent implements OnInit {

  userSession!: UserJwtSessionDTO;
  myinformations! : getUser;

  newEntrepriseForm = {nom : '', adresse: '', spe: '', siret: '', type: '', idUser: 0};


  constructor( private entrepriseService : EntreprisesService, private router: Router, private alertService: AlertService, private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.userSession = this.authService.getCurrentSession();
    this.userService.getMyInfos().subscribe(res => {
      this.myinformations = res;
    });
  }

  onSubmit() {
    const entrepriseCreate = this.newEntrepriseForm as EntrepriseCreateDto;
    entrepriseCreate.idUser = this.myinformations.id;
    this.entrepriseService.createEntretrise(entrepriseCreate).subscribe({
      next: data => {
        this.router.navigate(['/home']).then(() => this.alertService.success('L entreprise à bien été ajoutée, reconnectez vous'));

      },
      error: err => {
        this.alertService.error(err.error.message);
      }
    });
    this.logout();
  }


  logout(): void {
    this.authService.logout();
  }

}
