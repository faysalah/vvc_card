import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private authservice: AuthenticationService) { }

  ngOnInit() {
    this.authservice.logout();
  } 
  login() {

    this.authservice.login(this.model.email, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/wallet']);
        }
        else {
          console.log("login failed!");
        }
      });
  }



}
