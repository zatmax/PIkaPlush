import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {getProduit} from "../Models/produit.model";
import {EntrepriseCreateDto, getEntreprise} from "../Models/entreprise.model";

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {
  private entreprises_API = 'http://localhost:3000/entreprises/';

  constructor(private http: HttpClient) { }

  public getAllEntreprises(): Observable<getEntreprise[]>{
    return this.http.get<getEntreprise[]>(this.entreprises_API)
  }

  public getEntreprisesById(id: number): Observable<getEntreprise>{
    return this.http.get<getEntreprise>(this.entreprises_API + id)
  }

  public createEntretrise(EntrepriseCreateDto: EntrepriseCreateDto): Observable<any> {
    // console.log("userID " + EntrepriseCreateDto.idUser);
    return this.http.post<any>(this.entreprises_API, EntrepriseCreateDto);
  }



}
