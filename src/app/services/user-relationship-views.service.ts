import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersRelathionshipsViews } from '../models/user/users_relationships_views';

@Injectable({
  providedIn: 'root',
})
export class UserRelationshipViewsService {
  constructor(private httpClient: HttpClient) {}

  getSpecificUser(username: string) {
    let params = new HttpParams();
    params = params.append('username', username);
    return this.httpClient.get(
      `${environment.apiURL}usersRelationships/specificUser`,
      { params: params }
    );
  }

  createNewUser(newUser: UsersRelathionshipsViews) {
    return this.httpClient.post(
      `${environment.apiURL}usersRelationships/createNewUser`,
      newUser
    );
  }

  deleteUser(username: string) {
    let params = new HttpParams();
    params = params.append('username', username);
    return this.httpClient.delete(
      `${environment.apiURL}usersRelationships/deleteUser`,
      { params: params }
    );
  }
}