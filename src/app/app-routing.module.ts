import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';
import { PublisherComponent } from './publisher/publisher.component';
import { BlogEditorComponent } from './publisher/blog-editor/blog-editor.component';
import { AboutMeEditorComponent } from './publisher/about-me-editor/about-me-editor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'publisher', component: PublisherComponent, canActivate: [AuthGuard],
    children: [
      { path: 'blog-editor', component: BlogEditorComponent },
      { path: 'about-me-editor', component: AboutMeEditorComponent }
    ]
  },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
