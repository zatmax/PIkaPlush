import {Component, OnInit} from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";
import {UserLoginDto} from "../Models/user.model";
import {AlertService} from "../Services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = {email: '',pwd: ''};

  constructor(private authService: AuthService, private router: Router, private alertService: AlertService) {
  }

  ngOnInit() {
  }

  onSubmit(){
    const userLogin = this.loginForm as UserLoginDto;
    this.authService.login(userLogin).subscribe({
      next: (res) => {
        this.router.navigate(['/']).then(
          () => this.alertService.success("Vous êtes connecté"));
      },
      error: err => this.alertService.error(err.error.message)
    });
  }


}
