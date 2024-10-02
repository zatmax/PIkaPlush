import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {AuthService} from "../Services/auth.service";
import {UserService} from "../Services/user.service";
import {CartService} from "../Services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public href!: string;
  loggedIn : boolean = false;
  isVendeur : boolean = false;
  cartSize = 0;
  isMenuOpen: boolean = false;
  isMobile: boolean = false;


  constructor(private router: Router, private authService: AuthService, private userService: UserService, private cartService: CartService) {}



  ngOnInit(): void {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const path = window.location.href;
        let parts = path.split("/");
        this.href = parts[parts.length - 1];
        console.log(this.href);
      });
    this.authService.authStateChanged.subscribe((loggedIn: boolean) =>{
      this.loggedIn = loggedIn; //Pas besoin pour la page mon compte
      this.authService.vendeurStageChanged.subscribe((vendeur: boolean) => {
        this.isVendeur = vendeur;
      })
    });
    this.cartService.cartStateChanged.subscribe((cartSize) => {
      this.cartSize = cartSize;
    });
    this.checkIsMobile();
  }

  isLinkActive(route: string): boolean {
    return this.href === route;
  }

  logout(): void {
    this.authService.logout();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Lorsque la fenêtre est redimensionnée, appeler la fonction pour mettre à jour la valeur de isMobile
    this.checkIsMobile();
  }

  checkIsMobile() {
    this.isMobile = window.innerWidth <= 767;
  }
}
