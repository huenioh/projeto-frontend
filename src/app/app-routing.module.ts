import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscarLivroComponent } from './buscar-livro/buscar-livro.component';
import { FavoritosComponent } from './favoritos/favoritos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buscar-livro', component: BuscarLivroComponent },
  { path: 'favoritos', component: FavoritosComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
