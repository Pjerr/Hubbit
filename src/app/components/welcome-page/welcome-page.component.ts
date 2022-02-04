import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    private toastrService: ToastrService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  destroy$: Subject<boolean> = new Subject();
  clickedOnToggleRegister: boolean = true;

  //WORK IN PROGRESS
  interestsArray: string[] = [];
  turnOnsArray: string[] = [];
  turnOffsArray: string[] = [];

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  toggleResiterForm() {
    this.clickedOnToggleRegister = !this.clickedOnToggleRegister;
  }

  login(userLoginDto: UserLoginDto) {
    console.log(userLoginDto);
    //API CALL ZA LOGIN, MOZDA NECEMO DA RADIMO SA STORE NA KRAJU
    // this.store.dispatch(CommonActions.login({ userLoginDto: dataForLogin }));
    // setTimeout(() => {
    //   this.store
    //     .select(CommonSelectors.selectCurrentUserID)
    //     .pipe(takeUntil(this.destroy$))
    //     .subscribe((userID: number) => {
    //       localStorage.setItem('userID', userID.toString());
    //       localStorage.setItem('loginState', 'true');
    //       this.router.navigate(['/user/main']);
    //     });
    // }, 100);
    this.router.navigate(['user/main']);
  }
}
