import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersSearchViews } from '../models/user/users_search_views';

@Injectable({
  providedIn: 'root',
})
export class UserSearchViewsService {
  constructor(private httpClient: HttpClient) {}

  getSpecificUser(
    searchMode: string,
    username: string,
    location: string,
    fullName: string
  ) {
    let params = new HttpParams();
    params = params.append('searchMode', searchMode);
    params = params.append('username', username);
    params = params.append('location', location);
    params = params.append('fullName', fullName);
    return this.httpClient.get(
      `${environment.apiURL}usersSearch/getSpecificUser`,
      { params: params }
    );
  }

  createNewSearchUser(newUser: UsersSearchViews) {
    return this.httpClient.post(
      `${environment.apiURL}usersSearch/createNewSearchUser`,
      newUser
    );
  }

  deleteSearchUser(username: string) {
    let params = new HttpParams();
    params = params.append('username', username);
    return this.httpClient.delete(
      `${environment.apiURL}usersSearch/deleteSearchUser`,
      { params: params }
    );
  }
}
