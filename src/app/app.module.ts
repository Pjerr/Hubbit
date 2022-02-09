import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatpageComponent } from './components/chat/chatpage/chatpage.component';
import { ChatBoxComponent } from './components/chat/chat-box/chat-box.component';
import { ChatListComponent } from './components/chat/chat-list/chat-list.component';
import { ChatUsersListComponent } from './components/chat/chat-users-list/chat-users-list.component';
import { MessageComponent } from './components/chat/message/message.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { SearchComponent } from './components/search/search.component';
import { ChatThumbComponent } from './components/chat/chat-thumb/chat-thumb.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { commonReducer } from './store/common/common.reducer';
import { CommonEffects } from './store/common/common.effects';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './services/token-interceptor.service';

const socketConfig: SocketIoConfig = {
  url: environment.socketURL,
  options: {},
};
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavbarComponent,
    FooterComponent,
    ChatpageComponent,
    ChatBoxComponent,
    ChatListComponent,
    ChatUsersListComponent,
    UserSettingsComponent,
    ChatThumbComponent,
    MessageComponent,
    MainPageComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
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
    SocketIoModule.forRoot(socketConfig),
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
