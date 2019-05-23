import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Zipcodefilter'
})
export class ZipcodefilterPipe implements PipeTransform {

  transform(items: any[], searchzipcode: string): any {
   // return null
if(!items) return [];
if(!searchzipcode) return items;
searchzipcode=searchzipcode.toLowerCase();
return items.filter(data=>data.ZipCode.toLowerCase().includes(searchzipcode));
  }
}