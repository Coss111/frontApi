import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './app/components/user/user.component';
import { PostsComponent } from './app/components/posts/posts.component';
import { MainComponent } from './app/components/main/main.component';
import { AuthGuard } from './app/services/auth-guard.service';

const routes: Routes = [  
  { path: '', component: MainComponent, 
  canActivate: [AuthGuard],
  data: { roles: ['User'] }},
  { path: 'post', component: PostsComponent,
  canActivate: [AuthGuard],
  data: { roles: ['Admin'] }},
  { path: 'user', component: UserComponent,
  canActivate: [AuthGuard],
  data: { roles: ['User'] }},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }