import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDescription'
})
export class DescriptionPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return 'Descrição não disponível';
    return value.length > 100 ? value.substring(0, 100) + '...' : value;
  }
}
