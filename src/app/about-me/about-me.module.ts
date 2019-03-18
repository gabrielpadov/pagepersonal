import { CardModule } from 'primeng/card';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    CardModule,
    PipesModule
  ]
})
export class AboutMeModule { }
