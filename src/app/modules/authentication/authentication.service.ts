import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private subject: Subject<any> = new Subject<any>();

    get user(): Observable<any> {
        return this.subject.asObservable();
    }

    constructor() {

    }

    login(username: string, password: string): void {
        // appel serveur 
        const user = { login: username, name: username };
        sessionStorage.setItem('USER', JSON.stringify(user));
        this.subject.next(user);
    }

    logout(): void {
        sessionStorage.removeItem('USER');
        this.subject.next(null);
    }
}