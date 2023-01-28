import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showAge',
})
export class ShowAgePipe implements PipeTransform {
  transform(value: Date) {
    let age: number | undefined;
    const today = new Date();
    const difference = today.getFullYear() - value.getFullYear();
    if (value.getMonth() - today.getMonth() >= 1) {
      age = difference - 1;
    } else if (value.getMonth() - today.getMonth() < 0) {
      age = difference;
    } else if (value.getDate() - today.getDate() >= 1) {
      age = difference - 1;
    } else {
      age = difference;
    }
    if (age > 1) {
      return `${age} years old`;
    } else {
      return `${age} year old`;
    }
  }
}
