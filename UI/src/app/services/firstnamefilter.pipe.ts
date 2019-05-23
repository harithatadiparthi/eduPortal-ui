import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Firstnamefilter'
})
export class FirstnamefilterPipe implements PipeTransform {

  transform(items: any[], searchfirstname: string): any {
   // return null
if(!items) return [];
if(!searchfirstname) return items;
searchfirstname=searchfirstname.toLowerCase();
return items.filter(data=>data.Firstname.toLowerCase().includes(searchfirstname));
  }
}