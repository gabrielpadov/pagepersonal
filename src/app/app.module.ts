import { ContactService } from './contact/contact.service';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {DropdownModule} from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { SocialMediaEditorComponent } from './publisher/about-me-editor/social-media-editor/social-media-editor.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import { UserComponent } from './publisher/about-me-editor/user/user.component';
import { OccupationComponent } from './publisher/about-me-editor/occupation/occupation.component';
import { EducationComponent } from './publisher/about-me-editor/education/education.component';
import { InterestsComponent } from './/publisher/about-me-editor/interests/interests.component';
import { PublisherService } from './publisher/publisher.service';
import {TooltipModule} from 'primeng/tooltip';
import { AppService } from './app.service';
import { PostEditorComponent } from './publisher/blog-editor/post-editor/post-editor.component';
import { PostViewComponent } from './publisher/blog-editor/post-view/post-view.component';
import {GrowlModule} from 'primeng/growl';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { DatePipe } from './pipes/date.pipe';
import { DateMonthPipe } from './pipes/date-month.pipe';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './publisher/about-me-editor/skills/skills.component';
import {ChipsModule} from 'primeng/chips';
import {FileUploadModule} from 'primeng/fileupload';
import {CalendarModule} from 'primeng/calendar';
import {CaptchaModule} from 'primeng/captcha';
import {CheckboxModule} from 'primeng/checkbox';

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
    AboutMeEditorComponent,
    SocialMediaEditorComponent,
    UserComponent,
    OccupationComponent,
    EducationComponent,
    InterestsComponent,
    PostEditorComponent,
    PostViewComponent,
    DatePipe,
    DateMonthPipe,
    SkillsComponent
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
    SelectButtonModule,
    DropdownModule,
    ListboxModule,
    SplitButtonModule,
    PanelModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    GrowlModule,
    AutoCompleteModule,
    InputTextareaModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChipsModule,
    FileUploadModule,
    CalendarModule,
    CaptchaModule,
    CheckboxModule
  ],
  exports:
  [CardComponent],
  providers: [
    AuthService,
    AuthGuard,
    AboutMeGuard,
    SocialMediaService,
    BlogService,
    ConfirmationService,
    PublisherService,
    AppService,
    ContactService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
