import {Component, OnInit} from '@angular/core';
import {ProduitsService} from "../Services/produits.service";
import {getProduit} from "../Models/produit.model";
import {Router} from "@angular/router";
import {getCategorie} from "../Models/categorie.model";
import {CategoriesService} from "../Services/categories.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits !: getProduit[];
  categories !: getCategorie[];
  selectReverseSort : boolean = false;
  selectCategory: string = '';
  selectInputSearch!: string;

  constructor(private produitService: ProduitsService,private categoriesService : CategoriesService, private router: Router) {}

  readMore(id: number) {
    this.router.navigate(['/','produits',id])
  }

  ngOnInit() {
      this.produitService.getAllProduits().subscribe(res => {
        this.produits = res;
      });
      this.categoriesService.getAllCategories().subscribe(res =>{
        this.categories = res;
      })
  }


  public get filteredProducts(){
    const sortedProducts = (!this.selectReverseSort && this.produits.sort((a,b) => a.prix - b.prix)
    || this.produits.sort((a,b) => b.prix - a.prix));

    return sortedProducts.filter(produit =>
      (!this.selectCategory || produit.categorie?.nom.toLowerCase() === this.selectCategory.toLowerCase()) &&
      (!this.selectInputSearch || produit.nom.toLowerCase().includes(this.selectInputSearch))
    )
  }
}
