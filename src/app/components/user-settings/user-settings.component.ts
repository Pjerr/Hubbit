import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { UsersVisitProfileViews } from 'src/app/models/user/users_visit_profile_views';
import { UsersVisitProfileViewService } from 'src/app/services/users-visit-profile-view.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit, OnDestroy {
  constructor(
    private userVisitProfileService: UsersVisitProfileViewService,
    private modalService: ModalService,
    private toastrService: ToastrService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  userVisitProfileView: UsersVisitProfileViews | undefined = undefined;

  change: string | undefined = undefined;

  attribute!: FormControl;

  destroy$: Subject<boolean> = new Subject();

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (username) this.loadUser(username);
  }

  loadUser(username: string) {
    this.userVisitProfileService
      .searchByUsername(username)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.userVisitProfileView = data;
        },
      });
  }

  openModal(name: string) {
    this.modalService.open(name);
  }

  closeModal(name: string) {
    this.modalService.close(name);
  }

  updateUser() {
    const username = localStorage.getItem('username');
    if (username && this.change)
      this.userVisitProfileService
        .updateUserProfile(username, this.change, this.attribute.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          complete: () => {
            this.toastrService.success('Successfuly updated', 'Success');
            this.loadUser(username);
            this.modalService.close('modal');
          },
          error: () => {
            this.toastrService.error('There was an error', 'Error');
          },
        });
  }

  selectField(value: string) {
    this.change = value;
    if (this.userVisitProfileView) {
      if (value === 'gender') {
        this.attribute = new FormControl(this.userVisitProfileView.gender);
      } else
        this.attribute = new FormControl(this.userVisitProfileView.aboutMe);
    }
  }
}
