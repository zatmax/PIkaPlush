import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from "../Services/auth.service";
import {AlertService} from "../Services/alert.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router, private alertService : AlertService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Ajoutez le jeton d'authentification à l'en-tête de la requête
    const token = this.authService.getCurrentToken();
    console.log(token);
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
    }

    // Traitez la demande HTTP suivante et interceptez les erreurs
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Redirigez l'utilisateur vers la page de connexion
          this.authService.logout();
          this.router.navigate(['/login']).then(() => this.alertService.error("Vous devez être connecté pour accéder à cette page"));
        }
        if(error.status === 403){
          this.router.navigate(['/']).then(() =>this.alertService.error("vous n'avez pas les permissions afin d'accéder à cette page !"));
        }
        return throwError(error);
      })
    );
  }
}
