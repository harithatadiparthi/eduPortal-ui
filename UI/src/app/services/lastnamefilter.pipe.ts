import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Lastnamefilter'
})
export class LastnamefilterPipe implements PipeTransform {

  transform(items: any[], searchlastname: string): any {
   // return null
if(!items) return [];
if(!searchlastname) return items;
searchlastname=searchlastname.toLowerCase();
return items.filter(data=>data.Lastname.toLowerCase().includes(searchlastname));
  }
}