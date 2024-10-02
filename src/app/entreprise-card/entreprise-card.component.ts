import {Component, Input} from '@angular/core';
import {getEntreprise} from "../Models/entreprise.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-entreprise-card',
  templateUrl: './entreprise-card.component.html',
  styleUrls: ['./entreprise-card.component.css']
})
export class EntrepriseCardComponent {

  @Input()
  entreprise!: getEntreprise;

  constructor(private router: Router){  }


  readMore(id: number) {
    this.router.navigate(['/','entreprises',id])
  }
}
