import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { isLoggedIn } from './auth.selectors';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    protected store: Store<AppState>,
    protected router: Router,
    ) {
    //
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store
      .pipe(
        select(isLoggedIn),
        tap(isLoggedIn => {

          if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
          }
        })
    );
  }
}
