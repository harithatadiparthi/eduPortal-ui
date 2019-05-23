import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Statefilter'
})
export class StatefilterPipe implements PipeTransform {

  transform(items: any[], searchstate: string): any {
   // return null
if(!items) return [];
if(!searchstate) return items;
searchstate=searchstate.toLowerCase();
return items.filter(data=>data.State.toLowerCase().includes(searchstate));
  }
}