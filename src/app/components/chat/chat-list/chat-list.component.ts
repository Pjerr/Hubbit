import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatHead } from 'src/app/models/chat/chat-head';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  constructor() {}

  tempChats: ChatHead[] = [
    {
      id: 1,
      person: 'Petar Milisavljevic',
      lastMessage:
        'Cao, kako si, pisem dugacku poruku zbog dizajna na HTML stranici, Lorem ipsum ne znam sta da pisem, ali samo zelim da vidim koliko dugacko ce ovo sranje da bude da bi znao sta da radim sto se tice dizajna, no ljutis',
      profilePicture: '../../../../assets/user-avatar.png',
    },
    {
      id: 2,
      person: 'Teodora Kalezic',
      lastMessage: 'Ja sam smrda',
      profilePicture: '../../../../assets/user-avatar.png',
    },
    {
      id: 3,
      person: 'Luka Mladenovic',
      lastMessage: 'Imam veliku bidzu i jos veci mozak',
      profilePicture: '../../../../assets/user-avatar.png',
    },
    {
      id: 4,
      person: 'Levi Ackerman',
      lastMessage: 'Me ded',
      profilePicture: '../../../../assets/user-avatar.png',
    },
  ];

  chats: Observable<any> | undefined = undefined;

  ngOnInit(): void {}
}
