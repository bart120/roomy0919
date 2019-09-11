import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(email: string): void {
    this.auth.login(email, this.passwd.nativeElement.value);
  }

}
