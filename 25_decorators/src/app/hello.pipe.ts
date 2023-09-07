import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipe implements PipeTransform {
  transform(value: string): string {
    return `Hello, ${value}!`;
  }
}
