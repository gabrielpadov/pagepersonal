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
import { PublisherComponent } from './publisher/publisher.component';
import {EditorModule} from 'primeng/editor';
import { PostComponent } from './blog/post/post.component';
import {CardModule} from 'primeng/card';
import { CardComponent } from './blog/card/card.component';
import { BlogService } from './blog/blog.service';
import {ButtonModule} from 'primeng/button';
import { ListPostComponent } from './blog/list-post/list-post.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {SelectButtonModule} from 'primeng/selectbutton';
import { BlogEditorComponent } from './publisher/blog-editor/blog-editor.component';
import { AboutMeEditorComponent } from './publisher/about-me-editor/about-me-editor.component';

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
    CardComponent,
    ListPostComponent,
    BlogEditorComponent,
    AboutMeEditorComponent
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
    CardModule,
    ButtonModule,
    InfiniteScrollModule,
    DialogModule,
    TabViewModule,
    SelectButtonModule
  ],
  exports:
  [CardComponent],
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

platformBrowserDynamic().bootstrapModule(AppModule);
