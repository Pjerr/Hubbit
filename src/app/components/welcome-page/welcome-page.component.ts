import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subject, take, takeUntil } from 'rxjs';
import { UserLoginDto } from 'src/app/models/user/userLoginDto';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit, OnDestroy {
  constructor(private toastrService: ToastrService, private router: Router) {}

  destroy$: Subject<boolean> = new Subject();
  clickedOnToggleRegister: boolean = false;

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
    this.router.navigate(['user/main']);
  }
}
