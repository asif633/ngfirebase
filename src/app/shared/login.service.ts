import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { User } from './user.model';

@Injectable()
export class LoginService {

    constructor(public af: AngularFire) {
    }

    login(user: User) {
        return this.af.auth.login({ email: user.email, password: user.password });
    }

    logout() {
        return this.af.auth.logout();
    }

}