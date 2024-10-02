import {Component, OnInit} from '@angular/core';
import {getEntreprise} from "../Models/entreprise.model";
import {EntreprisesService} from "../Services/entreprises.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css']
})
export class EntreprisesComponent implements OnInit{

  entreprises !: getEntreprise[];
  selectType: string = ''

  constructor(private entrepriseService: EntreprisesService, private router: Router){  }

  readMore(id: number) {
    this.router.navigate(['/','entreprises',id])
  }

  ngOnInit() {
    this.entrepriseService.getAllEntreprises().subscribe(res => {
      this.entreprises = res;
    });
  }

  public get filteredEntreprises(){
    const sortedEntreprises = this.entreprises;
    return sortedEntreprises.filter(entreprises =>
      (!this.selectType || entreprises.type.toLowerCase() === this.selectType.toLowerCase())
    )
  }

}
