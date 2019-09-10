import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

const ROUTES: Routes = [
  {
    path: 'auth', children: [
      { path: 'login', component: LoginComponent }
    ]
  }
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule
  ]
})
export class AuthenticationModule { }
