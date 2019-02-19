import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
   name: 'formatDateMonth'
})
export class DateMonthPipe implements PipeTransform {

  d: Date;

  transform(date: any, args?: any): any {
     this.d = new Date(date);
     return moment(this.d).format('MM/YYYY');
   }
}
