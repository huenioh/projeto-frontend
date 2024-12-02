import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private storageKey = 'favoritosBooks'; // Chave única para armazenar no localStorage
  private favoritos: any[] = []; // Lista interna de favoritos

  constructor() {
    // Inicializa a lista de favoritos ao carregar o serviço
    this.favoritos = this.loadFavoritosFromStorage();
  }

  /**
   * Adiciona um livro aos favoritos
   */
  addFavoritos(book: any): void {
    const newFavoritos = {
      id: book.id,
      title: book.title,
      author_name: book.author_name || [],
      cover: book.cover || 'https://via.placeholder.com/80x120?text=Sem+Capa'
    };

    // Verifica se o livro já está nos favoritos
    if (!this.isFavoritos(newFavoritos.id)) {
      this.favoritos.push(newFavoritos);
      console.log(newFavoritos); // Verifique a URL da capa
      this.saveFavoritosToStorage(); // Salva a lista no localStorage
    }
  }


  /**
   * Remove um livro dos favoritos
   */
  removeFavoritos(bookId: string): void {
    this.favoritos = this.favoritos.filter((b) => b.id !== bookId); // Remove pelo ID
    this.saveFavoritosToStorage(); // Salva a lista atualizada
  }

  /**
   * Obtém a lista de favoritos
   */
  getFavoritos(): any[] {
    return [...this.favoritos]; // Retorna uma cópia da lista interna
  }

  /**
   * Verifica se um livro está nos favoritos
   */
  isFavoritos(bookId: string): boolean {
    return this.favoritos.some((b) => b.id === bookId);
  }

  /**
   * Carrega os favoritos do localStorage
   */
  private loadFavoritosFromStorage(): any[] {
    if (typeof window !== 'undefined' && localStorage) {
      const favoritos = localStorage.getItem(this.storageKey);
      return favoritos ? JSON.parse(favoritos) : [];
    }
    return []; // Retorna uma lista vazia se não estiver no ambiente do navegador
  }

  /**
   * Salva a lista atualizada no localStorage
   */
  private saveFavoritosToStorage(): void {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.favoritos));
    }
  }
}
