import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { Message } from 'src/app/models/chat/message';
import { ConversationService } from 'src/app/services/conversation.service';
import { MessagesService } from 'src/app/services/messages.service';
import { SocketService } from 'src/app/services/socket.service';
import { UserRelationshipViewsService } from 'src/app/services/user-relationship-views.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.scss'],
})
export class ChatpageComponent implements OnInit, OnDestroy {
  constructor(
    private conversationService: ConversationService,
    private userRelationshipsService: UserRelationshipViewsService,
    private messagesService: MessagesService,
    private socketService: SocketService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  allConnectedUsers: any[] | undefined = undefined;
  currentUsername: string | undefined = undefined;
  receiverUsername: string | undefined = undefined;

  messagesOfSelectedConvo: Message[] | undefined = undefined;
  selectedConvoId: string | undefined = undefined;
  selectedNumberOfBackgroundImage: number = 1;

  destroy$: Subject<boolean> = new Subject();

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (username) {
      this.currentUsername = username;

      this.userRelationshipsService
        .getContactsForUser(username)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response: any) => {
          this.allConnectedUsers = response;
        });
    }
  }

  showConvo(username: string) {
    let smallerUsername: string;
    let biggerUsername: string;

    if (this.currentUsername) {
      if (this.currentUsername > username) {
        smallerUsername = username;
        biggerUsername = this.currentUsername;
      } else {
        smallerUsername = this.currentUsername;
        biggerUsername = username;
      }
      this.conversationService
        .getConvoForBothUsers(smallerUsername, biggerUsername)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (result: any) => {
            this.selectedConvoId = result[0]._id;
          },
          error: () => {
            console.log('Error kod get convo');
          },
          complete: () => {
            if (this.selectedConvoId)
              this.messagesService
                .getMessagesByConversation(this.selectedConvoId)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                  next: (result: any) => {
                    this.messagesOfSelectedConvo = result;
                  },
                  error: () => {
                    console.log('Error kod get messages');
                  },
                });
          },
        });
    }
  }

  sendMessage(objectForSend: any) {
    const messageForSocket = {
      senderUsername: objectForSend.sender,
      receiverUsername: objectForSend.receiver,
      text: objectForSend.text,
    };

    const messageForDb = {
      sender: objectForSend.sender,
      text: objectForSend.text,
      conversationId: objectForSend.conversationId,
    };

    this.messagesService
      .createNewMessage(messageForDb)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        complete: () => {
          this.socketService.emit('sendMessage', messageForSocket);
          if (this.messagesOfSelectedConvo) {
            this.messagesOfSelectedConvo.push(messageForDb);
          }
        },
      });
  }

  changeBackgroundImage(bckNumber: number) {
    this.selectedNumberOfBackgroundImage = bckNumber;
  }
}
