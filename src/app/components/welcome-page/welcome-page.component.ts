import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subject, take, takeUntil } from 'rxjs';
import { UserDto } from 'src/app/models/user/userDto';
import { UserLoginDto } from 'src/app/models/user/userLoginDto';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/store/app.state';
import * as CommonActions from '../../store/common/common.actions';
import * as CommonSelectors from '../../store/common/common.selectors';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private store: Store<AppState>,
    private userService: UserService
  ) {}

  destroy$: Subject<boolean> = new Subject();
  clickedOnToggleRegister: boolean = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  //stavio sam timeout zato sto bez njega prvo posalje -1, pa onda tek vrednost pravu za usera, ne znam zasto
  //TODO: try to fix
  login() {
    const dataForLogin: UserLoginDto = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.store.dispatch(CommonActions.login({ userLoginDto: dataForLogin }));
    setTimeout(() => {
      this.store
        .select(CommonSelectors.selectCurrentUserID)
        .pipe(takeUntil(this.destroy$))
        .subscribe((userID: number) => {
          localStorage.setItem('userID', userID.toString());
          localStorage.setItem('loginState', 'true');
          this.router.navigate(['/user/posts']);
        });
    }, 100);
  }

  register() {
    console.log('REGISTERING');
  }

  toggleResiterForm() {
    this.clickedOnToggleRegister = !this.clickedOnToggleRegister;
  }
}
