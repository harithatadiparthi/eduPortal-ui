import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Companyfilter'
})
export class CompanyfilterPipe implements PipeTransform {

  transform(items: any[], searchcompany: string): any {
   // return null
if(!items) return [];
if(!searchcompany) return items;
searchcompany=searchcompany.toLowerCase();
return items.filter(data=>data.Company.toLowerCase().includes(searchcompany));
  }
}