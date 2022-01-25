import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hubbit';

  userLoggedIn: boolean = true;

  //uradi ovo preko store!
  isUserLoggedIn() {
    return this.userLoggedIn;
  }
}
