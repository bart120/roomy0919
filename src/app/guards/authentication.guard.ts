import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../modules/authentication/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {

    private user: any;

    constructor(private auth: AuthenticationService, private snack: MatSnackBar) {
        this.auth.user.subscribe(
            u => this.user = u
        );
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.user) {
            this.snack.open('Non non non', 'OK', { duration: 3000 });
        }
        return this.user != null;
    }
}
