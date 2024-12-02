import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customAuthors'
})
export class AuthorsPipe implements PipeTransform {
  transform(value: string[] | undefined): string {
    if (!value || value.length === 0) return 'Autor não disponível';
    return value.join(', ');
  }
}
