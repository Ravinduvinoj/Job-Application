import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //  if(!value) return null;
  //  if (!args) return null;


  //  args = args.toLowerCase();
  //  return value.filter((item:any)=>{
  //   return JSON.stringify(item).toLowerCase().includes(args);
  //  })
  // }
  transform(value: any, searchText?: string): any {
    if (!value) return null;
    if (!searchText) return value;
  
    searchText = searchText.toLowerCase();
  
    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}
