import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono'
})
export class TelefonoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const cleaned = value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    return cleaned.replace(/(\d{4})(\d{4})(\d+)/, '+$1 $2 $3');
  }
}
