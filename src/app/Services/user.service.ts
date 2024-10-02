import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {getUser, UserUpdateEntrepriseRoleDto} from "../Models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users_API = 'http://localhost:3000/users/';
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<getUser[]>{
    return this.http.get<getUser[]>(this.users_API)
  }

  public getMyInfos(): Observable<getUser>{
    return this.http.get<getUser>(this.users_API+ "infos");
  }


  public setEntrepriseRole(userUpdate: UserUpdateEntrepriseRoleDto, id: number): Observable<any> {
    const body = {
      role: userUpdate.role,
      entreprise: userUpdate.entreprise.id
    };
    const url = `http://localhost:3000/users/${id}`;

    return this.http.put(url, body);
  }


}
