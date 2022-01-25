import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.state';
import * as CommonActions from '../../store/common/common.actions';
import * as CommonSelectors from '../../store/common/common.selectors';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private store: Store<AppState>
  ) {}

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

  login() {
    console.log('LOGGING IN');
    console.log(this.loginForm.value);
    this.store.dispatch(CommonActions.login({ loginStatus: true }));
    localStorage.setItem('loginState', 'true');
    this.router.navigate(['/user/posts'], { queryParams: { userID: 1 } });
  }

  register() {
    console.log('REGISTERING');
  }

  toggleResiterForm() {
    this.clickedOnToggleRegister = !this.clickedOnToggleRegister;
  }
}
