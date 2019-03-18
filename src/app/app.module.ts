import { ContactService } from './contact/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { PublisherGuard } from './guards/publisher.guard';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SocialMediaService } from './social-media/social-media.service';
import {CardModule} from 'primeng/card';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {DialogModule} from 'primeng/dialog';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import { AppService } from './app.service';
import {GrowlModule} from 'primeng/growl';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';
import {CaptchaModule} from 'primeng/captcha';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    DialogModule,
    SplitButtonModule,
    InputTextModule,
    InputTextareaModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    GrowlModule,
    HttpClientModule,
    CaptchaModule,
  ],
  exports: [  ],
  providers: [
    AuthService,
    AuthGuard,
    PublisherGuard,
    SocialMediaService,
    ConfirmationService,
    AppService,
    ContactService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
