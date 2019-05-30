import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { AppState } from './reducers';
import { Logout } from './auth/auth.actions';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  public isLoggedOut$: Observable<boolean>;



    constructor(
      protected store: Store<AppState>,
      protected router: Router
      ) {
      //
    }

    ngOnInit() {
      this.isLoggedIn$ = this.store.pipe(
        select(isLoggedIn)
      );

      this.isLoggedOut$ = this.store.pipe(
        select(isLoggedOut)
      );
    }

    logout(): void {
      this.store.dispatch(new Logout());
    }


}
