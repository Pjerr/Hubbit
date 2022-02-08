import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersAlgorithmViews } from '../models/user/users_algorithm_views';

@Injectable({
  providedIn: 'root',
})
export class UserAlgorithmViewsService {
  constructor(private httpClient: HttpClient) {}

  getAllUsersAlgorithmViews() {
    return this.httpClient.get<UsersAlgorithmViews[]>(
      `${environment.apiURL}usersAlgorithms`
    );
  }

  createNewAlgoUser(newUser: UsersAlgorithmViews) {
    return this.httpClient.post(
      `${environment.apiURL}usersAlgorithms/createNewAlgoUsers`,
      newUser
    );
  }

  deleteAlgoUser(username: string) {
    let params = new HttpParams();
    params = params.append('username', username);
    return this.httpClient.delete(
      `${environment.apiURL}usersAlgorithms/deleteAlgoUser`,
      { params: params }
    );
  }
}
