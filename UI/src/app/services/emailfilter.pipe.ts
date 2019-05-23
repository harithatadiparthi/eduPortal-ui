import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Emailfilter'
})
export class EmailfilterPipe implements PipeTransform {

  transform(items: any[], searchemail: string): any {
   // return null
if(!items) return [];
if(!searchemail) return items;
searchemail=searchemail.toLowerCase();
return items.filter(data=>data.EMail.toLowerCase().includes(searchemail));
  }
}