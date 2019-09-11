import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './modules/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Roomy';
  user: any;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {

    this.auth.user.subscribe(
      u => this.user = u
    );

  }

  onLogout(): void {
    this.auth.logout();
  }
}
