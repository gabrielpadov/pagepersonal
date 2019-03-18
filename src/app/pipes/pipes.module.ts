import { DatePipe } from './date.pipe';
import { NgModule } from '@angular/core';
import { DateMonthPipe } from './date-month.pipe';

@NgModule({
  imports: [],
  exports: [
    DatePipe,
    DateMonthPipe
  ],
  declarations: [
    DatePipe,
    DateMonthPipe
  ]
})

export class PipesModule { }
