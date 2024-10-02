import {Component, OnInit} from '@angular/core';
import {UserService} from "../Services/user.service";
import {getUser} from "../Models/user.model";

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit{


  myinformations! : getUser;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getMyInfos().subscribe(res => {
        this.myinformations = res;
    });
  }
}
