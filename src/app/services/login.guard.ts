import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private _route: Router,
        private _userSV: UserService,
    ) {

    }

    canActivate() {
       
        let identity = this._userSV.getIdentity();

        if (identity) {
            return true;
        }
        else {
            console.log("Entr");
            this._route.navigate(['inicio']);
            return false
        }
    }
}