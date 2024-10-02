import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {getProduit, ProduitCreateDto, updateProduitDTO} from "../Models/produit.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
private produits_API = 'http://localhost:3000/produits/';

  constructor(private http: HttpClient) { }

  public getAllProduits(): Observable<getProduit[]>{
    return this.http.get<getProduit[]>(this.produits_API)
  }

  public getProduitsById(id: number): Observable<getProduit>{
    return this.http.get<getProduit>(this.produits_API + id)
  }

  public createProduit(ProduitCreateDto: ProduitCreateDto): Observable<getProduit> {
    return this.http.post<getProduit>(this.produits_API,
      ProduitCreateDto
    );
  }

  public updateProduit(ProduitUpdateDto: updateProduitDTO, id: number): Observable<getProduit> {
    return this.http.put<getProduit>(this.produits_API+ id,
      ProduitUpdateDto
    );
  }

  public uploadPhoto(photo: File){
      const formData = new FormData();
      formData.append('file', photo);

      const apiUrl = this.produits_API +'upload-photo/';
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      return this.http.post(apiUrl, formData, { headers: headers });
  }

  public deleteProduit(id: number): Observable<any> {
    return this.http.delete(this.produits_API + id)
  }


}
