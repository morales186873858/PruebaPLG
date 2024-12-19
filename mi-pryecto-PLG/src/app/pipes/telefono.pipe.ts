import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono'
})
export class TelefonoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const reversed = value.split('').reverse().join('');
    const grouped = reversed.match(/.{1,4}/g)?.join(' ') || '';
    return grouped.split('').reverse().join('');
  }
}
