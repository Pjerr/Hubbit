import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersVisitProfileViews } from 'src/app/models/user/users_visit_profile_views';
import { UsersVisitProfileViewService } from 'src/app/services/users-visit-profile-view.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent implements OnInit {
  constructor(private userVisitProfileService: UsersVisitProfileViewService) {}

  userVisitProfileView: Observable<UsersVisitProfileViews> | undefined =
    undefined;

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (username)
      this.userVisitProfileView =
        this.userVisitProfileService.searchByUsername(username);
  }
}
