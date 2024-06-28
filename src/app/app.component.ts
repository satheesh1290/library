import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ReadersComponent } from './readers/readers.component';
import { ReadersDetailComponent } from './readers-detail/readers-detail.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BooksComponent,
    ReadersComponent,
    ReadersDetailComponent,
    HeaderComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'book-reader-app';
}
