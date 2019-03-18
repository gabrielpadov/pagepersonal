import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { LinksComponent } from './about-me-editor/links/links.component';
import { EducationComponent } from './about-me-editor/education/education.component';
import { AboutMeEditorComponent } from './about-me-editor/about-me-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PublisherService } from './publisher.service';
import { PublisherRoutingModule } from './publisher-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PublisherComponent } from './publisher.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { InterestsComponent } from './about-me-editor/interests/interests.component';
import { OccupationComponent } from './about-me-editor/occupation/occupation.component';
import { SkillsComponent } from './about-me-editor/skills/skills.component';
import { SocialMediaEditorComponent } from './about-me-editor/social-media-editor/social-media-editor.component';
import { UserComponent } from './about-me-editor/user/user.component';
import { PostEditorComponent } from './blog-editor/post-editor/post-editor.component';
import { PostViewComponent } from './blog-editor/post-view/post-view.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { GrowlModule } from 'primeng/growl';
import { PostModule } from '../blog/post/post.module';
import { PipesModule } from '../pipes/pipes.module';
import { ChipsModule } from 'primeng/chips';
import { MaterializeModule } from 'angular2-materialize';
import { SidebarModule } from 'primeng/sidebar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import {TabViewModule} from 'primeng/tabview';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    PublisherComponent,
    AboutMeEditorComponent,
    BlogEditorComponent,
    EducationComponent,
    InterestsComponent,
    LinksComponent,
    OccupationComponent,
    SkillsComponent,
    SocialMediaEditorComponent,
    UserComponent,
    PostEditorComponent,
    PostViewComponent
  ],
  imports: [
    CommonModule,
    PublisherRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    GrowlModule,
    SplitButtonModule,
    PostModule,
    PipesModule,
    ScrollPanelModule,
    DropdownModule,
    ChipsModule,
    MaterializeModule,
    SidebarModule,
    NgbModule,
    PanelModule,
    PostModule,
    FileUploadModule,
    CalendarModule,
    AutoCompleteModule,
    InputTextareaModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
    PanelModule,
    CheckboxModule,
    TabViewModule
  ],
  providers: [
    PublisherService
  ]
})
export class PublisherModule { }
