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
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { commonReducer } from './store/common/common.reducer';
import { CommonEffects } from './store/common/common.effects';

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
    UserSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(
      {
        common: commonReducer,
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([CommonEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
