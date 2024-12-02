import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BuscarLivroComponent } from './buscar-livro/buscar-livro.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookListStyleDirective } from './book-list-style.directive';
import { TitlePipe } from './pipes/title.pipe';
import { AuthorsPipe } from './pipes/authors.pipe';
import { DescriptionPipe } from './pipes/description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarLivroComponent,
    FavoritosComponent,
    NavbarComponent,
    BookListStyleDirective,
    TitlePipe,
    AuthorsPipe,
    DescriptionPipe,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
