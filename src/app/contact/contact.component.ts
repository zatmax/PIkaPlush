import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AlertService} from "../Services/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private alertService: AlertService, private router: Router) {
    this.emailForm = this.fb.group({
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      objet: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', Validators.required]
    });
  }
;
  //Envoyer un email à l'aide de formspree
  sendEmail() {

    //url propre à son compte
    let url = "https://formspree.io/f/mwkjdlqj";

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    // récupérer les valeurs du form
    let formData = this.emailForm.value;
    let data = `name=${formData.name}&prenom=${formData.prenom}&objet=${formData.objet}&email=${formData.email}&message=${formData.message}`;
    let errorMessage: string = "";

    // valider ou non le format des champs
    // si tout est ok, envoyé le mail
    if (this.emailForm.valid) {
      this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: data => {
          this.alertService.success('Message bien envoyé')
          // vider les inputs du form
          this.emailForm.reset();
          this.router.navigate(['/home']);
          console.log("email sent" + JSON.stringify(data));
          let erreurP = document.getElementById("messageErreurContact");
          if (erreurP){
            erreurP.innerHTML = "";
          }
        },
        error: error => {
          errorMessage = error.message;
          console.log('error!', errorMessage);
        }
      });
    } else {
      let erreurP = document.getElementById("messageErreurContact");
      if (erreurP) {
        erreurP.innerHTML = "Champs vides et/ou mauvais format d'e-mail";
      }
    }
  }
}
