import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Message } from 'src/app/models/chat/message';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewChecked
{
  constructor(
    private socketService: SocketService,
    private renderer2: Renderer2
  ) {}

  ngAfterViewChecked(): void {
    console.log(this.container);
    // if (this.backgroundImageNumber)
    //   this.renderer2.setProperty(
    //     this.container,
    //     'background-image',
    //     `../../../../assets/chat-backgrounds/background${this.backgroundImageNumber}.jpg`
    //   );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.container);
    if (this.senderUsername) this.sortMessages(this.senderUsername);
    if (this.backgroundImageNumber && this.container)
      this.renderer2.setProperty(
        this.container,
        'background-image',
        `../../../../assets/chat-backgrounds/background${this.backgroundImageNumber}.jpg`
      );
  }

  @Input() messages: any[] | undefined = undefined;
  @Input() convoId: string | undefined = undefined;
  @Input() backgroundImageNumber: number | undefined = undefined;

  @ViewChild('target') myScrollContainer: ElementRef = new ElementRef('target');

  @ViewChild('container') container!: ElementRef;

  @Output() newMessageEmmiter = new EventEmitter<any>();
  first: boolean = true;
  otherUser: string | undefined = undefined;
  senderUsername: string | undefined = undefined;
  messageToSend = new FormControl('');
  destroy$: Subject<boolean> = new Subject();

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (this.messages && username) {
      this.socketService.emit('addUser', username);

      this.socketService
        .listen('getMessage')
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any) => {
          let newMessage: any = {
            conversationId: this.convoId,
            text: data.text,
            sender: data.senderUsername,
          };
          if (this.messages) {
            this.messages.push(newMessage);
          }
        });

      this.senderUsername = username;
      this.sortMessages(username);
    }
  }

  sortMessages(username: string) {
    if (this.messages)
      this.messages = this.messages.map((msg: Message) => {
        if (msg.sender === username) {
          return { ...msg, own: true };
        } else {
          if (this.first) {
            this.otherUser = msg.sender;
            this.first = false;
          }
          return { ...msg, own: false };
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  sendMessage(): void {
    if (this.senderUsername && this.convoId) {
      const objectForDbAndSocket = {
        sender: this.senderUsername,
        text: this.messageToSend.value,
        conversationId: this.convoId,
        receiver: this.otherUser,
      };
      if (this.messages)
        this.messages.push({
          sender: this.senderUsername,
          text: this.messageToSend.value,
          conversationId: this.convoId,
          own: true,
        });
      this.newMessageEmmiter.emit(objectForDbAndSocket);
      this.messageToSend.setValue('');
    }
  }

  //TODO: FIX
  scrollToBottom() {
    this.myScrollContainer.nativeElement.scroll({
      top: this.myScrollContainer.nativeElement.scrollHeight,

      left: 0,

      behavior: 'smooth',
    });
  }
}
