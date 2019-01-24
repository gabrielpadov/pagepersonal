import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterializeModule, MaterializeDirective } from 'angular2-materialize';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './about-me/login/login.component';
import { AuthService } from './about-me/login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AboutMeGuard } from './guards/aboutMe.guard';
import { FormComponent } from './about-me/form/form.component';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SocialMediaService } from './social-media/social-media.service';
import { FeedComponent } from './blog/feed/feed.component';
import { PublisherComponent } from './blog/publisher/publisher.component';
import {EditorModule} from 'primeng/editor';
import { PostComponent } from './blog/post/post.component';
import {CardModule} from 'primeng/card';
import { CardComponent } from './blog/card/card.component';
import { BlogService } from './blog/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    AboutMeComponent,
    PagenotfoundComponent,
    LoginComponent,
    FormComponent,
    ContactComponent,
    SocialMediaComponent,
    FeedComponent,
    PublisherComponent,
    PostComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    EditorModule,
    CardModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AboutMeGuard,
    SocialMediaService,
    BlogService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
