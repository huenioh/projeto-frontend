import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private storageKey = 'favoritosBooks'; // Chave única para armazenar no localStorage
  private favoritos: any[] = []; // Lista interna de favoritos

  constructor() {
    // Inicializa a lista de favoritos ao carregar o serviço
    this.favoritos = this.getFavoritos();
  }

  /**
   * Adiciona um livro aos favoritos
   */
  addFavoritos(book: any): void {
    const newFavoritos = {
      id: book.id, // ID do livro
      title: book.title, // Título do livro
      author_name: book.author_name || [], // Lista de autores (ou vazio)
      cover: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` // URL da capa se disponível
        : 'https://via.placeholder.com/80x120?text=Sem+Capa', // URL da imagem padrão
    };

    // Verifica se o livro já está nos favoritos
    if (!this.isFavoritos(newFavoritos.id)) {
      this.favoritos.push(newFavoritos); // Adiciona o livro
      this.saveFavoritos(); // Salva a lista no localStorage
    }
  }

  /**
   * Remove um livro dos favoritos
   */
  removeFavoritos(bookId: string): void {
    this.favoritos = this.favoritos.filter((b) => b.id !== bookId); // Remove pelo ID
    this.saveFavoritos(); // Salva a lista atualizada
  }

  /**
   * Obtém a lista de favoritos
   */
  getFavoritos(): any[] {
    // Retorna a lista do localStorage ou um array vazio
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  /**
   * Verifica se um livro está nos favoritos
   */
  isFavoritos(bookId: string): boolean {
    return this.favoritos.some((b) => b.id === bookId);
  }

  /**
   * Salva a lista atualizada no localStorage
   */
  private saveFavoritos(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.favoritos));
  }
}
