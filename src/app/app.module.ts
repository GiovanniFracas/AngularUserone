import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCardComponent } from './post-card/post-card.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { UsersComponent } from './users/users.component';
import { UserDettagliComponent } from './user-dettagli/user-dettagli.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active-posts',
    component: ActivePostsComponent
  },
  {
    path: 'inactive-posts',
    component: InactivePostsComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children:
      [{
        path: 'user-dettagli/:Nome/:mail/:ruolo',
        component: UserDettagliComponent
      }]
  },
  {
    path: 'dettagli/:id/:title/:body/:active/:type/:author',
    component: DettagliComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    NavbarComponent,
    PostCardComponent,
    DettagliComponent,
    UsersComponent,
    UserDettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
