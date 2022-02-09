import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private httpClient: HttpClient) {}

  createNewMessage(newMessageObj: any) {
    return this.httpClient.post(
      `${environment.apiURL}messages/createNewMessage`,
      newMessageObj
    );
  }

  getMessagesByConversation(conversationID: string) {
    let params = new HttpParams();
    params = params.append('conversationId', conversationID);
    return this.httpClient.get(
      `${environment.apiURL}messages/getMessagesByConversation`,
      { params: params }
    );
  }
}
