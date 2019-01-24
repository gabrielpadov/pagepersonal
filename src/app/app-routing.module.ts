import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './about-me/login/login.component';
// import { AuthGuard } from './guards/auth.guard';
import { FormComponent } from './about-me/form/form.component';
import { FeedComponent } from './blog/feed/feed.component';
import { PublisherComponent } from './blog/publisher/publisher.component';
import { PostComponent } from './blog/post/post.component';
import { ListPostComponent } from './blog/list-post/list-post.component';
import { CardComponent } from './blog/card/card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent, /*canActivate: [AuthGuard],*/
    children: [
    { path: 'publisher', component: PublisherComponent },
    { path: 'feed', component: FeedComponent },
    { path: 'list-post', component: ListPostComponent },
    { path: 'card', component: CardComponent },
    { path: 'post', component: PostComponent, pathMatch: 'full'}
  ]},
  { path: 'about-me', component: AboutMeComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'form', component: FormComponent }
  ]},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
