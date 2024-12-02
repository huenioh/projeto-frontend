import { Component, OnInit} from '@angular/core';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {}
    ngOnInit(): void {
      this.loadFavoritos();
    }

    loadFavoritos(): void {
      this.favoritos = this.favoritosService.getFavoritos();
    }

    removeFavoritos(bookId: string): void {
      this.favoritosService.removeFavoritos(bookId);
      this.loadFavoritos();
    }
}
