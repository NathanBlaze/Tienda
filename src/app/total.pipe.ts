import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    console.log(arg);
    return value?.reduce( (prev:any, current:any) => prev + current[arg], 0);
  }

}
