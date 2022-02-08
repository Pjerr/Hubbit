import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as CommonActions from '../../store/common/common.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {}

  logout(): void {
    console.log('LOGGING OUT');
    const state = localStorage.getItem('loginState');
    if (state === 'true') {
      localStorage.clear();
      this.store.dispatch(
        CommonActions.toggleLoginStatus({ loginStatus: false })
      );
      this.router.navigate(['']);
    }
  }
}