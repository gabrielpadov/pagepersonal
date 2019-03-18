import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherComponent } from './publisher.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { AboutMeEditorComponent } from './about-me-editor/about-me-editor.component';

const routes: Routes = [
  { path: '', component: PublisherComponent, children: [
    { path: 'blog-editor', component: BlogEditorComponent },
    { path: 'about-me-editor', component: AboutMeEditorComponent }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule { }
