import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { MaterializeModule } from 'angular2-materialize';
import { CardComponent } from './card/card.component';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './blog.service';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { FeedComponent } from './feed/feed.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChipsModule } from 'primeng/chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PostModule } from './post/post.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    BlogComponent,
    CardComponent,
    FeedComponent,
    ListPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CardModule,
    ButtonModule,
    InfiniteScrollModule,
    ScrollPanelModule,
    ChipsModule,
    MaterializeModule,
    SidebarModule,
    NgbModule,
    PanelModule,
    PostModule,
    PipesModule
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
