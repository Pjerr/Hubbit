import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatpageComponent } from './components/chat/chatpage/chatpage.component';
import { PostsComponent } from './components/posts/posts.component';
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
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'chat',
        component: ChatpageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
