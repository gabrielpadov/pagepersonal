import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
   name: 'formatDate'
})
export class DatePipe implements PipeTransform {

  d: Date;

  transform(date: any, args?: any): any {
     this.d = new Date(date);
     return moment(this.d).format('DD/MM/YYYY');
   }
}
