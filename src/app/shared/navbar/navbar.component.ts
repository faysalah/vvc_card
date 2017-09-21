import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  active = false;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      (value: boolean) => {
        this.active = value;
      }
    );
  }
}
