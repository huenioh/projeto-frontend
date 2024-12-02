import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-buscar-livro',
  templateUrl: './buscar-livro.component.html',
  styleUrls: ['./buscar-livro.component.css']
})
export class BuscarLivroComponent {
  books: any[] = [];
  searchQuery: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private apiService: ApiService,
    private favoritosService: FavoritosService
  ) {}

  /**
   * Busca livros da API.
   */
  searchBooks(): void {
    if (!this.searchQuery.trim()) {
      this.errorMessage = 'Por favor, digite um termo de busca.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.searchBooks(this.searchQuery).subscribe(
      (data) => {
        console.log('Resposta da API:', data); // Exibe a resposta da API no console
        this.books = data.items || []; // Acessa os resultados da propriedade 'items'
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao buscar livros:', error);
        this.errorMessage = 'Erro ao buscar livros. Tente novamente mais tarde.';
        this.isLoading = false;
      }
    );
  }

  /**
   * Adiciona ou remove um livro dos favoritos.
   */
  toggleFavoritos(book: any): void {
    const formattedBook = {
      id: book.id || book.volumeInfo.id, // Use 'id' ou 'volumeInfo.id'
      title: book.volumeInfo?.title || 'Título Desconhecido',
      author_name: book.volumeInfo?.authors || ['Autor Desconhecido'],
      cover: book.volumeInfo?.imageLinks?.thumbnail ||
             'https://via.placeholder.com/80x120?text=Sem+Capa',
    };

    if (this.favoritosService.isFavoritos(formattedBook.id)) {
      this.favoritosService.removeFavoritos(formattedBook.id);
    } else {
      this.favoritosService.addFavoritos(formattedBook);
    }
  }

  /**
   * Verifica se um livro está nos favoritos.
   */
  isFavoritos(bookId: string): boolean {
    return this.favoritosService.isFavoritos(bookId);
  }
}
