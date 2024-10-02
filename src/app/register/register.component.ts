import {Component, OnInit} from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";
import {AlertService} from "../Services/alert.service";
import {UserCreateDto, UserLoginDto} from "../Models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm = {nom: '', prenom: '', email: '', pwd: ''};

  constructor(private authService: AuthService, private router: Router, private alertService: AlertService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const userCreate: UserCreateDto = this.registerForm;
    this.authService.register(userCreate).subscribe({
      next: () => {
        this.router.navigate(['/home']);
        this.alertService.success("Inscription réussi !");
        const userLogin: UserLoginDto = this.registerForm;
        this.authService.login(userLogin).subscribe({
          next: (data) => {
            this.authService.setCurrentToken(data)
          },
          error: err => this.alertService.error(err.error.message)
        });
      },
      error: err => this.alertService.error(err.error.message)
    });
  }

}
