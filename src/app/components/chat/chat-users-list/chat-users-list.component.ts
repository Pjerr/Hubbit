import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-users-list',
  templateUrl: './chat-users-list.component.html',
  styleUrls: ['./chat-users-list.component.scss'],
})
export class ChatUsersListComponent implements OnInit {
  constructor() {}

  @Input() convoId: string | undefined = undefined;
  @Output() backgroundImageEmmiter: EventEmitter<number> = new EventEmitter();

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  color: string = '';
  ngOnInit(): void {}

  setBackground(numberOfBackground: number) {
    this.backgroundImageEmmiter.emit(numberOfBackground);
    //API CALL
  }

  changeColor() {
    console.log(this.color);
  }
}
