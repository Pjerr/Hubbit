import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { ChatpageComponent } from './components/chat/chatpage/chatpage.component';
import { ChatBoxComponent } from './components/chat/chat-box/chat-box.component';
import { ChatListComponent } from './components/chat/chat-list/chat-list.component';
import { ChatUsersListComponent } from './components/chat/chat-users-list/chat-users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    FooterComponent,
    PostsComponent,
    ChatpageComponent,
    ChatBoxComponent,
    ChatListComponent,
    ChatUsersListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
