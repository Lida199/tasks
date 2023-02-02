import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '../model/data.interface';

@Pipe({
  name: 'showUsers',
})
export class ShowUsersPipe implements PipeTransform {
  transform(value: Data[]) {
    return `Users: ${value.map((item) => item.firstName).join(', ')}`;
  }
}
