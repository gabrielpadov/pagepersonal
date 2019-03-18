import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'publisher', loadChildren: './publisher/publisher.module#PublisherModule', canActivate: [AuthGuard] },
  { path: 'about-me', loadChildren: './about-me/about-me.module#AboutMeModule' },
  { path: '**',  loadChildren: './pagenotfound/pagenotfound.module#PagenotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
