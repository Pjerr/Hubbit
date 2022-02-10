import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  currentUsername: string | undefined = undefined;
  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (username) this.currentUsername = username;
  }

  likePerson(): void {}

  nextPerson(): void {}
}
