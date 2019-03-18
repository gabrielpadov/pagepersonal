import { MaterializeModule } from 'angular2-materialize';
import { PagenotfoundComponent } from './pagenotfound.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
    MaterializeModule
  ],
  declarations: [PagenotfoundComponent]
})
export class PagenotFoundModule { }
