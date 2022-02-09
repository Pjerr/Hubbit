import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatpageComponent } from './components/chat/chatpage/chatpage.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchComponent } from './components/search/search.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'user',
    children: [
      {
        path: 'main',
        component: MainPageComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'chat',
        component: ChatpageComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'settings',
        component: UserSettingsComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuardGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
