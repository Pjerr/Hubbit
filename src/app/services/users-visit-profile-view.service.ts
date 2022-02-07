import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersVisitProfileViews } from '../models/user/users_visit_profile_views';

@Injectable({
  providedIn: 'root',
})
export class UsersVisitProfileViewService {
  constructor(private httpClient: HttpClient) {}

  getAllUserVisitProfileView() {
    return this.httpClient.get(`${environment.apiURL}usersVisitProfile`);
  }

  searchByUsername(username: string) {
    let params = new HttpParams();
    params = params.append('username', username);
    return this.httpClient.get(
      `${environment.apiURL}usersVisitProfile/searchByUsername`,
      { params: params }
    );
  }

  createNewUserProfileView(newUser: UsersVisitProfileViews) {
    return this.httpClient.post(
      `${environment.apiURL}usersVisitProfile/createNewUserProfileView`,
      newUser
    );
  }

  updateUserProfile(username: string, aboutMe: string) {
    return this.httpClient.put(
      `${environment.apiURL}usersVisitProfile/updateUserProfile`,
      { username, aboutMe }
    );
  }

  deleteUser(username: string) {
    let params = new HttpParams();
    params = params.append('username', username);
    return this.httpClient.delete(
      `${environment.apiURL}usersVisitProfile/deleteUser`,
      { params: params }
    );
  }
}
