import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle'
})
export class TitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return 'Título não disponível';
    return value.length > 30 ? value.substring(0, 30) + '...' : value;
  }
}
