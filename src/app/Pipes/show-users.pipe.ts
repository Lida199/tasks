import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '../Model/data.interface';

@Pipe({
  name: 'showUsers',
})
export class ShowUsersPipe implements PipeTransform {
  transform(value: Data[]) {
    const users: string[] = [];
    value.forEach((user) => users.push(user.firstName));
    return `Users: ${users.join(', ')}`;
  }
}
