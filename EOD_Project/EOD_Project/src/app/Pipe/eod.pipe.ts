import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eod'
})
export class EodPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
