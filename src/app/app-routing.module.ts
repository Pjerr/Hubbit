import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatpageComponent } from './components/chat/chatpage/chatpage.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchComponent } from './components/search/search.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'user',
    children: [
      {
        path: 'main',
        component: MainPageComponent,
      },
      {
        path: 'chat',
        component: ChatpageComponent,
      },
      {
        path: 'settings',
        component: UserSettingsComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
