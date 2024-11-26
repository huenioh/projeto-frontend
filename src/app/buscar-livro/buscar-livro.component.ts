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

  constructor(private apiService: ApiService,
    private favoritosService: FavoritosService
  ) {}

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
  toggleFavoritos(books: any): void {
    if (this.favoritosService.isFavoritos(books.id)) {
      this.favoritosService.removeFavoritos(books.id);
    } else {
      this.favoritosService.addFavoritos(books);
    }
  }
  
  
  isFavoritos(bookId: string): boolean {
    return this.favoritosService.isFavoritos(bookId);
  }

}

