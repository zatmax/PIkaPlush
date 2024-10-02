import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {getCategorie} from "../Models/categorie.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categorie_API = 'http://localhost:3000/categories/';
  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<getCategorie[]>{
    return this.http.get<getCategorie[]>(this.categorie_API)
  }

  public getCategories(id: number): Observable<getCategorie>{
    return this.http.get<getCategorie>(this.categorie_API + id)
  }
}
