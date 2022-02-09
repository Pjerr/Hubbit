import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  constructor() {}

  @Input() own: boolean | undefined = undefined;
  @Input() text: string | undefined = undefined;

  ngOnInit(): void {}
}
