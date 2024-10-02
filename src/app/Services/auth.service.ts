import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {UserCreateDto, UserJwtSessionDTO, UserJwtTokenDTO, UserLoginDto} from "../Models/user.model";
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth_API = 'http://localhost:3000/auth/';
  private USER_TOKEN_KEY = 'user_token_key';

  private isLoggedInSubject = new BehaviorSubject<boolean>(!!this.getCurrentSession());
  private isVendeurInSubject = new BehaviorSubject<boolean>(false);

  public authStateChanged = this.isLoggedInSubject.asObservable();
  public vendeurStageChanged = this.isVendeurInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {
  }

  login(userLoginDto: UserLoginDto): Observable<UserJwtTokenDTO> {

    return this.http.post<UserJwtTokenDTO>(this.auth_API + 'login', userLoginDto).pipe(
      tap((response: UserJwtTokenDTO) => {
        this.setCurrentToken(response);
        if (this.isVendeur()) {
          this.isVendeurInSubject.next(true);
        }
        this.isLoggedInSubject.next(true);
      })
    );
  }

  register(userCreateDto: UserCreateDto): Observable<any> {
    console.log(userCreateDto);
    return this.http.post<UserCreateDto>(this.auth_API + 'register', userCreateDto);
  }

  logout(): void {
    localStorage.removeItem(this.USER_TOKEN_KEY);
    this.isLoggedInSubject.next(false);
    this.isVendeurInSubject.next(false);
    this.router.navigate(['/']);
      //.then(() => this.alertService.success("vous avez été déconnecté"))
  }

  getCurrentSession(): UserJwtSessionDTO {
    const userJwtToken = localStorage.getItem(this.USER_TOKEN_KEY);
    return userJwtToken ? JSON.parse(atob(userJwtToken.split('.')[1])) : null;
  }

  isLoggedIn(): boolean {
    return this.getCurrentSession() !== null;
  }

  isVendeur(): boolean {
    return this.getCurrentSession().role === "vendeur";
  }

  getCurrentToken(): UserJwtTokenDTO | null {
    const userJwtToken = window.localStorage.getItem(this.USER_TOKEN_KEY);
    return userJwtToken ? JSON.parse(userJwtToken) : null;
  }

  setCurrentToken(userJwtTokenDTO: UserJwtTokenDTO){
    const userJwtTokenString = JSON.stringify(userJwtTokenDTO);
    window.localStorage.setItem(this.USER_TOKEN_KEY, userJwtTokenString);
  }


}
