import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AppState } from './store/app.state';
import * as CommonSelectors from './store/common/common.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Hubbit';
  constructor(private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    const loginState = localStorage.getItem('loginState');
    if (loginState && loginState == 'true') {
      this.userLoggedIn = true;
    } else {
      this.store
        .select(CommonSelectors.selectIsLoggedIn)
        .pipe(takeUntil(this.destroy$))
        .subscribe((loginState) => {
          this.userLoggedIn = loginState;
        });
    }
  }

  destroy$: Subject<boolean> = new Subject();
  userLoggedIn: boolean | undefined = undefined;

  isUserLoggedIn() {
    return this.userLoggedIn;
  }
}
