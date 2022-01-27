import { Component, Input, OnInit } from '@angular/core';
import { ChatHead as ChatHead } from 'src/app/models/chat/chat-head';

@Component({
  selector: 'app-chat-thumb',
  templateUrl: './chat-thumb.component.html',
  styleUrls: ['./chat-thumb.component.scss'],
})
export class ChatThumbComponent implements OnInit {
  constructor() {}

  @Input() chat: ChatHead | undefined = undefined;

  ngOnInit(): void {}

  showChat(chat: ChatHead): void {
    console.log('should load chat for ' + chat.person);
  }
}
