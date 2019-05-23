import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Cityfilter'
})
export class CityfilterPipe implements PipeTransform {

  transform(items: any[], searchcity: string): any {
   // return null
if(!items) return [];
if(!searchcity) return items;
searchcity=searchcity.toLowerCase();
return items.filter(data=>data.City.toLowerCase().includes(searchcity));
  }
}